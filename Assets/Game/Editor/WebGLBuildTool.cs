#if UNITY_EDITOR
using System.IO;
using UnityEditor;
using UnityEngine;

namespace Kingshot.Editor
{
    public static class WebGLBuildTool
    {
        [MenuItem("Kingshot/Build WebGL")]
        public static void BuildFromMenu() => Build();

        public static void BuildAndExit()
        {
            bool success = Build();
            EditorApplication.Exit(success ? 0 : 4);
        }

        private static bool Build()
        {
            const string output = "Temp/WebGLBuild";
            Directory.CreateDirectory(output);
            BuildPlayerOptions options = new BuildPlayerOptions
            {
                scenes = new[] { "Assets/Game/Scenes/Gameplay.unity" },
                locationPathName = output,
                target = BuildTarget.WebGL,
                options = BuildOptions.Development
            };
            UnityEditor.Build.Reporting.BuildReport report = BuildPipeline.BuildPlayer(options);
            bool success = report.summary.result == UnityEditor.Build.Reporting.BuildResult.Succeeded;
            Debug.Log($"WEBGL_BUILD result={report.summary.result} errors={report.summary.totalErrors} size={report.summary.totalSize}");
            return success;
        }
    }
}
#endif
