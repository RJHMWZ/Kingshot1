using System;
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;
using UnityEngine.Rendering;

public static class ExtractedSkinnedModelImporter
{
    private const string DataRoot = "Assets/ExtractedSkinnedModels/RawData";
    private const string TextureRoot = "Assets/ExtractedSkinnedModels/Textures";
    private const string OutputRoot = "Assets/ExtractedSkinnedModels/Generated";

    [MenuItem("Tools/试玩复刻/生成带骨骼角色")]
    public static void BuildAll()
    {
        EnsureFolder("Assets", "ExtractedSkinnedModels");
        EnsureFolder("Assets/ExtractedSkinnedModels", "Generated");
        string[] guids = AssetDatabase.FindAssets("t:TextAsset", new[] { DataRoot });
        int built = 0;
        foreach (string guid in guids)
        {
            string path = AssetDatabase.GUIDToAssetPath(guid);
            if (!path.EndsWith(".json", StringComparison.OrdinalIgnoreCase)) continue;
            TextAsset textAsset = AssetDatabase.LoadAssetAtPath<TextAsset>(path);
            ModelData data = JsonUtility.FromJson<ModelData>(textAsset.text);
            if (data == null || data.meshes == null || data.meshes.Length == 0) continue;
            BuildModel(data);
            built++;
        }
        AssetDatabase.SaveAssets();
        AssetDatabase.Refresh();
        Debug.Log($"带骨骼角色生成完成，共 {built} 组。输出目录：{OutputRoot}");
    }

    private static void BuildModel(ModelData data)
    {
        string folderName = SafeName(data.name);
        string folder = OutputRoot + "/" + folderName;
        if (AssetDatabase.IsValidFolder(folder)) AssetDatabase.DeleteAsset(folder);
        AssetDatabase.CreateFolder(OutputRoot, folderName);

        GameObject root = new GameObject(data.name);

        Shader shader = Shader.Find("Extracted/TextureUnlit");
        if (shader == null) shader = Shader.Find("Standard");

        for (int meshIndex = 0; meshIndex < data.meshes.Length; meshIndex++)
        {
            MeshData meshData = data.meshes[meshIndex];
            GameObject armatureObject = new GameObject("Armature_" + (meshIndex + 1));
            armatureObject.transform.SetParent(root.transform, false);
            armatureObject.transform.localRotation = ToQuaternion(data.armatureRotation);

            Dictionary<string, Transform> bones = new Dictionary<string, Transform>();
            foreach (BoneData boneData in meshData.bones)
            {
                GameObject boneObject = new GameObject(LastName(boneData.path));
                Transform parent = string.IsNullOrEmpty(boneData.parent)
                    ? armatureObject.transform
                    : bones[boneData.parent];
                boneObject.transform.SetParent(parent, false);
                boneObject.transform.localPosition = ToVector3(boneData.position);
                boneObject.transform.localRotation = ToQuaternion(boneData.rotation);
                boneObject.transform.localScale = ToVector3(boneData.scale);
                bones.Add(boneData.path, boneObject.transform);
            }

            Mesh mesh = new Mesh { name = meshData.name };
            if (meshData.vertices.Length / 3 > 65535) mesh.indexFormat = IndexFormat.UInt32;
            mesh.vertices = ToVector3Array(meshData.vertices);
            mesh.normals = ToVector3Array(meshData.normals);
            mesh.uv = ToVector2Array(meshData.uv);
            if (meshData.colors != null && meshData.colors.Length > 0)
                mesh.colors = ToColorArray(meshData.colors);
            mesh.boneWeights = ToBoneWeights(meshData.joints, meshData.weights);
            mesh.bindposes = ToMatrices(meshData.bindposes);
            mesh.triangles = meshData.triangles;
            mesh.RecalculateBounds();
            string meshPath = folder + "/" + SafeName(meshData.name) + ".asset";
            AssetDatabase.CreateAsset(mesh, meshPath);

            Material material = new Material(shader) { name = meshData.name + "_Material" };
            Texture2D texture = AssetDatabase.LoadAssetAtPath<Texture2D>(TextureRoot + "/" + meshData.textureFile);
            if (texture != null) material.mainTexture = texture;
            else Debug.LogWarning("未找到角色原贴图：" + meshData.textureFile);
            string materialPath = folder + "/" + SafeName(material.name) + ".mat";
            AssetDatabase.CreateAsset(material, materialPath);

            GameObject meshObject = new GameObject(meshData.name);
            meshObject.transform.SetParent(root.transform, false);
            SkinnedMeshRenderer renderer = meshObject.AddComponent<SkinnedMeshRenderer>();
            renderer.sharedMesh = mesh;
            renderer.sharedMaterial = material;
            renderer.bones = Array.ConvertAll(meshData.bonePaths, path => bones[path]);
            renderer.rootBone = renderer.bones[0];
            renderer.updateWhenOffscreen = true;
        }

        List<AnimationClip> clips = new List<AnimationClip>();
        foreach (ClipData clipData in data.animations)
        {
            AnimationClip clip = new AnimationClip { name = clipData.name, frameRate = 30f };
            foreach (ChannelData channel in clipData.channels)
            {
                int width = channel.target == "rotation" ? 4 : 3;
                string propertyRoot = channel.target == "translation"
                    ? "m_LocalPosition"
                    : channel.target == "rotation" ? "m_LocalRotation" : "m_LocalScale";
                string[] axes = { "x", "y", "z", "w" };
                for (int meshIndex = 0; meshIndex < data.meshes.Length; meshIndex++)
                {
                    if (Array.IndexOf(data.meshes[meshIndex].bonePaths, channel.bonePath) < 0) continue;
                    string transformPath = "Armature_" + (meshIndex + 1) + "/" + channel.bonePath;
                    for (int axis = 0; axis < width; axis++)
                    {
                        Keyframe[] keys = new Keyframe[channel.times.Length];
                        for (int key = 0; key < keys.Length; key++)
                            keys[key] = new Keyframe(channel.times[key], channel.values[key * width + axis]);
                        clip.SetCurve(transformPath, typeof(Transform), propertyRoot + "." + axes[axis], new AnimationCurve(keys));
                    }
                }
            }
            clip.EnsureQuaternionContinuity();
            AnimationClipSettings settings = AnimationUtility.GetAnimationClipSettings(clip);
            settings.loopTime = clipData.loop;
            AnimationUtility.SetAnimationClipSettings(clip, settings);
            string clipPath = folder + "/" + SafeName(clipData.name) + ".anim";
            AssetDatabase.CreateAsset(clip, clipPath);
            clips.Add(clip);
        }

        if (clips.Count > 0)
        {
            string controllerPath = folder + "/" + SafeName(data.name) + ".controller";
            AnimatorController controller = AnimatorController.CreateAnimatorControllerAtPath(controllerPath);
            AnimatorStateMachine stateMachine = controller.layers[0].stateMachine;
            for (int i = 0; i < clips.Count; i++)
            {
                AnimatorState state = stateMachine.AddState(clips[i].name);
                state.motion = clips[i];
                if (i == 0) stateMachine.defaultState = state;
            }
            Animator animator = root.AddComponent<Animator>();
            animator.runtimeAnimatorController = controller;
        }

        PrefabUtility.SaveAsPrefabAsset(root, folder + "/" + SafeName(data.name) + ".prefab");
        UnityEngine.Object.DestroyImmediate(root);
    }

    private static BoneWeight[] ToBoneWeights(int[] joints, float[] weights)
    {
        int count = joints.Length / 4;
        BoneWeight[] result = new BoneWeight[count];
        for (int i = 0; i < count; i++)
        {
            int offset = i * 4;
            result[i] = new BoneWeight
            {
                boneIndex0 = joints[offset], boneIndex1 = joints[offset + 1],
                boneIndex2 = joints[offset + 2], boneIndex3 = joints[offset + 3],
                weight0 = weights[offset], weight1 = weights[offset + 1],
                weight2 = weights[offset + 2], weight3 = weights[offset + 3]
            };
        }
        return result;
    }

    private static Matrix4x4[] ToMatrices(float[] source)
    {
        Matrix4x4[] result = new Matrix4x4[source.Length / 16];
        for (int i = 0; i < result.Length; i++)
        {
            Matrix4x4 matrix = new Matrix4x4();
            for (int column = 0; column < 4; column++)
                for (int row = 0; row < 4; row++)
                    matrix[row, column] = source[i * 16 + column * 4 + row];
            result[i] = matrix;
        }
        return result;
    }

    private static Vector3[] ToVector3Array(float[] source)
    {
        Vector3[] result = new Vector3[source.Length / 3];
        for (int i = 0; i < result.Length; i++)
            result[i] = new Vector3(source[i * 3], source[i * 3 + 1], source[i * 3 + 2]);
        return result;
    }

    private static Vector2[] ToVector2Array(float[] source)
    {
        Vector2[] result = new Vector2[source.Length / 2];
        for (int i = 0; i < result.Length; i++)
            result[i] = new Vector2(source[i * 2], source[i * 2 + 1]);
        return result;
    }

    private static Color[] ToColorArray(float[] source)
    {
        Color[] result = new Color[source.Length / 4];
        for (int i = 0; i < result.Length; i++)
            result[i] = new Color(source[i * 4], source[i * 4 + 1], source[i * 4 + 2], source[i * 4 + 3]);
        return result;
    }

    private static Vector3 ToVector3(float[] values) => new Vector3(values[0], values[1], values[2]);
    private static Quaternion ToQuaternion(float[] values) => new Quaternion(values[0], values[1], values[2], values[3]);
    private static string LastName(string path) => path.Substring(path.LastIndexOf('/') + 1);
    private static string SafeName(string value) => string.Join("_", value.Split(Path.GetInvalidFileNameChars()));

    private static void EnsureFolder(string parent, string child)
    {
        string path = parent + "/" + child;
        if (!AssetDatabase.IsValidFolder(path)) AssetDatabase.CreateFolder(parent, child);
    }

    [Serializable] private class ModelData
    {
        public string name;
        public string sourceUuid;
        public float[] armatureRotation;
        public MeshData[] meshes;
        public ClipData[] animations;
    }

    [Serializable] private class BoneData
    {
        public string path;
        public string parent;
        public float[] position;
        public float[] rotation;
        public float[] scale;
    }

    [Serializable] private class MeshData
    {
        public string name;
        public string sourceUuid;
        public string textureFile;
        public BoneData[] bones;
        public float[] vertices;
        public float[] normals;
        public float[] uv;
        public float[] colors;
        public int[] joints;
        public float[] weights;
        public int[] triangles;
        public string[] bonePaths;
        public float[] bindposes;
    }

    [Serializable] private class ClipData
    {
        public string name;
        public float duration;
        public bool loop;
        public ChannelData[] channels;
    }

    [Serializable] private class ChannelData
    {
        public string bonePath;
        public string target;
        public float[] times;
        public float[] values;
    }
}
