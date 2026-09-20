#if UNITY_EDITOR
using System.IO;
using Kingshot.Gameplay;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace Kingshot.Editor
{
    public static class GameplaySceneBuilder
    {
        private const string SourceScene = "Assets/Scenes/SampleScene.unity";
        private const string GameplayScene = "Assets/Game/Scenes/Gameplay.unity";

        [MenuItem("Kingshot/Build Gameplay Vertical Slice")]
        public static void Build()
        {
            EnsureFolders();
            AssetDatabase.Refresh();

            if (AssetDatabase.LoadAssetAtPath<SceneAsset>(GameplayScene) == null &&
                !AssetDatabase.CopyAsset(SourceScene, GameplayScene))
            {
                throw new IOException("Could not copy SampleScene to Gameplay.unity.");
            }

            Scene scene = EditorSceneManager.OpenScene(GameplayScene, OpenSceneMode.Single);
            RemoveExistingGeneratedObjects();

            Camera mainCamera = FindMainCamera();
            GameObject playerRoot = BuildPlayer(mainCamera);
            BuildJoystick(playerRoot.GetComponent<PlayerInputReader>());
            ConfigureCamera(mainCamera, playerRoot.transform);
            EnsureGround();

            EditorSceneManager.MarkSceneDirty(scene);
            EditorSceneManager.SaveScene(scene, GameplayScene);
            EditorBuildSettings.scenes = new[] { new EditorBuildSettingsScene(GameplayScene, true) };
            AssetDatabase.SaveAssets();
            Debug.Log("Gameplay vertical slice built successfully: " + GameplayScene);
        }

        public static void BuildAndExit()
        {
            try
            {
                Build();
                EditorApplication.Exit(0);
            }
            catch (System.Exception exception)
            {
                Debug.LogException(exception);
                EditorApplication.Exit(1);
            }
        }

        private static void EnsureFolders()
        {
            Directory.CreateDirectory("Assets/Game/Scenes");
            Directory.CreateDirectory("Assets/Game/Scripts");
            Directory.CreateDirectory("Assets/Game/Prefabs");
            Directory.CreateDirectory("Assets/Game/UI");
            Directory.CreateDirectory("Assets/Game/Editor");
        }

        private static void RemoveExistingGeneratedObjects()
        {
            GameObject existingRoot = GameObject.Find("PlayerRoot");
            if (existingRoot != null)
            {
                Transform adjustedPlayer = FindDescendant(existingRoot.transform, "Player");
                if (adjustedPlayer != null)
                {
                    adjustedPlayer.SetParent(null, true);
                }
            }

            string[] names = { "PlayerRoot", "PlayerUI", "EventSystem", "GameGround" };
            foreach (string objectName in names)
            {
                GameObject existing = GameObject.Find(objectName);
                if (existing != null)
                {
                    Object.DestroyImmediate(existing);
                }
            }
        }

        private static GameObject BuildPlayer(Camera mainCamera)
        {
            GameObject adjustedPlayer = GameObject.Find("Player");
            if (adjustedPlayer == null)
            {
                throw new MissingReferenceException(
                    "The adjusted Player object was not found in Gameplay.unity.");
            }

            GameObject root = new GameObject("PlayerRoot");
            root.transform.position = adjustedPlayer.transform.position;
            root.transform.rotation = Quaternion.identity;

            CharacterController controller = root.AddComponent<CharacterController>();
            controller.radius = 0.5f;
            controller.height = 2f;
            controller.center = Vector3.up;
            controller.stepOffset = 0.3f;
            controller.skinWidth = 0.08f;

            PlayerInputReader input = root.AddComponent<PlayerInputReader>();
            PlayerMovement movement = root.AddComponent<PlayerMovement>();
            PlayerAnimation animation = root.AddComponent<PlayerAnimation>();
            movement.SetCamera(mainCamera != null ? mainCamera.transform : null);

            GameObject visual = new GameObject("Visual");
            visual.transform.SetParent(root.transform, false);
            adjustedPlayer.transform.SetParent(visual.transform, true);

            Animator animator = adjustedPlayer.GetComponentInChildren<Animator>(true);
            if (animator != null)
            {
                animator.applyRootMotion = false;
            }

            EditorUtility.SetDirty(input);
            EditorUtility.SetDirty(movement);
            EditorUtility.SetDirty(animation);
            return root;
        }

        private static Transform FindDescendant(Transform root, string objectName)
        {
            foreach (Transform child in root.GetComponentsInChildren<Transform>(true))
            {
                if (child.name == objectName)
                {
                    return child;
                }
            }

            return null;
        }

        private static void BuildJoystick(PlayerInputReader inputReader)
        {
            GameObject canvasObject = new GameObject("PlayerUI", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
            Canvas canvas = canvasObject.GetComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            CanvasScaler scaler = canvasObject.GetComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(1920f, 1080f);
            scaler.screenMatchMode = CanvasScaler.ScreenMatchMode.MatchWidthOrHeight;
            scaler.matchWidthOrHeight = 0.5f;

            GameObject backgroundObject = CreateImage("VirtualJoystick", canvasObject.transform, new Color(0f, 0f, 0f, 0.35f));
            RectTransform background = backgroundObject.GetComponent<RectTransform>();
            background.anchorMin = Vector2.zero;
            background.anchorMax = Vector2.zero;
            background.pivot = new Vector2(0.5f, 0.5f);
            background.sizeDelta = new Vector2(220f, 220f);
            background.anchoredPosition = new Vector2(150f, 150f);

            GameObject handleObject = CreateImage("Handle", background, new Color(1f, 1f, 1f, 0.75f));
            RectTransform handle = handleObject.GetComponent<RectTransform>();
            handle.anchorMin = new Vector2(0.5f, 0.5f);
            handle.anchorMax = new Vector2(0.5f, 0.5f);
            handle.pivot = new Vector2(0.5f, 0.5f);
            handle.sizeDelta = new Vector2(90f, 90f);
            handle.anchoredPosition = Vector2.zero;
            handleObject.GetComponent<Image>().raycastTarget = false;

            VirtualJoystick joystick = backgroundObject.AddComponent<VirtualJoystick>();
            joystick.Configure(background, handle);
            inputReader.SetVirtualJoystick(joystick);
            EditorUtility.SetDirty(inputReader);

            new GameObject("EventSystem", typeof(EventSystem), typeof(StandaloneInputModule));
        }

        private static GameObject CreateImage(string name, Transform parent, Color color)
        {
            GameObject gameObject = new GameObject(name, typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
            gameObject.transform.SetParent(parent, false);
            Image image = gameObject.GetComponent<Image>();
            image.color = color;
            image.sprite = AssetDatabase.GetBuiltinExtraResource<Sprite>("UI/Skin/Knob.psd");
            image.type = Image.Type.Simple;
            return gameObject;
        }

        private static void ConfigureCamera(Camera mainCamera, Transform target)
        {
            if (mainCamera == null)
            {
                throw new MissingReferenceException("SampleScene has no Main Camera.");
            }

            mainCamera.transform.position = target.position + new Vector3(0f, 50f, -26.5f);
            mainCamera.transform.rotation = Quaternion.Euler(60f, 0f, 0f);
            CameraFollow follow = mainCamera.GetComponent<CameraFollow>();
            if (follow == null)
            {
                follow = mainCamera.gameObject.AddComponent<CameraFollow>();
            }
            follow.Configure(target, new Vector3(0f, 50f, -26.5f));
            EditorUtility.SetDirty(follow);
        }

        private static Camera FindMainCamera()
        {
            Camera camera = Camera.main;
            if (camera != null)
            {
                return camera;
            }

            Camera[] cameras = Object.FindObjectsOfType<Camera>(true);
            return cameras.Length > 0 ? cameras[0] : null;
        }

        private static void EnsureGround()
        {
            Collider[] colliders = Object.FindObjectsOfType<Collider>(true);
            bool hasUsableGround = false;
            foreach (Collider collider in colliders)
            {
                if (collider.enabled && !collider.isTrigger &&
                    collider.GetComponentInParent<CharacterController>() == null)
                {
                    hasUsableGround = true;
                    break;
                }
            }

            if (hasUsableGround)
            {
                return;
            }

            GameObject ground = new GameObject("GameGround");
            ground.transform.position = new Vector3(0f, -0.5f, 0f);
            BoxCollider colliderComponent = ground.AddComponent<BoxCollider>();
            colliderComponent.size = new Vector3(200f, 1f, 200f);
        }
    }
}
#endif
