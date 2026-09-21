#if UNITY_EDITOR
using Kingshot.Gameplay;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

namespace Kingshot.Editor
{
    [InitializeOnLoad]
    public static class FullGameplaySmokeTest
    {
        private const string ScenePath = "Assets/Game/Scenes/Gameplay.unity";
        private const string RunningKey = "Kingshot.FullGameplaySmoke.Running";
        private static double startedAt;
        private static bool initialized;

        static FullGameplaySmokeTest()
        {
            if (SessionState.GetBool(RunningKey, false))
            { EditorApplication.update -= Update; EditorApplication.update += Update; }
        }

        public static void RunAndExit()
        {
            EditorSceneManager.OpenScene(ScenePath, OpenSceneMode.Single);
            SessionState.SetBool(RunningKey, true);
            EditorApplication.update += Update;
            EditorApplication.isPlaying = true;
        }

        private static void Update()
        {
            if (!EditorApplication.isPlaying) return;
            if (!initialized)
            {
                initialized = true; startedAt = EditorApplication.timeSinceStartup; return;
            }

            double elapsed = EditorApplication.timeSinceStartup - startedAt;
            PlayerWallet wallet = Object.FindObjectOfType<PlayerWallet>(true);
            PlayerMovement movement = Object.FindObjectOfType<PlayerMovement>(true);
            PurchaseZone[] zones = Object.FindObjectsOfType<PurchaseZone>(true);
            GameSession session = Object.FindObjectOfType<GameSession>(true);
            if (wallet != null) wallet.Add(100);
            if (movement != null)
            {
                bool movedToZone = false;
                for (int i = 0; i < zones.Length; i++)
                {
                    if (zones[i].gameObject.activeInHierarchy && !zones[i].IsCompleted)
                    { movement.transform.position = zones[i].transform.position; movedToZone = true; break; }
                }
                if (!movedToZone)
                {
                    EnemyBrain[] enemies = Object.FindObjectsOfType<EnemyBrain>();
                    if (enemies.Length > 0) movement.transform.position = enemies[0].transform.position + Vector3.back * 3f;
                }
            }

            bool zonesDone = zones.Length == 3;
            for (int i = 0; i < zones.Length; i++) zonesDone &= zones[i].IsCompleted;
            bool victory = session != null && session.CurrentResult == GameSession.Result.Victory;
            if (!victory && elapsed < 35d) return;

            Debug.Log($"FULL_GAMEPLAY_SMOKE zones={zones.Length} zonesDone={zonesDone} enemies={EnemyRegistry.LivingCount} result={(session == null ? "missing" : session.CurrentResult.ToString())}");
            int exitCode = zonesDone && victory ? 0 : 3;
            SessionState.EraseBool(RunningKey); EditorApplication.update -= Update;
            EditorApplication.isPlaying = false; EditorApplication.Exit(exitCode);
        }
    }
}
#endif
