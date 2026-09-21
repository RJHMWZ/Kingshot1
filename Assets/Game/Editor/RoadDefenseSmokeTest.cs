#if UNITY_EDITOR
using Kingshot.Gameplay;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

namespace Kingshot.Editor
{
    [InitializeOnLoad]
    public static class RoadDefenseSmokeTest
    {
        private const string RunningKey = "Kingshot.RoadDefenseSmoke.Running";
        private static double startedAt; private static bool initialized;
        static RoadDefenseSmokeTest()
        {
            if (SessionState.GetBool(RunningKey, false))
            { EditorApplication.update -= Update; EditorApplication.update += Update; }
        }
        public static void RunAndExit()
        {
            EditorSceneManager.OpenScene("Assets/Game/Scenes/Gameplay.unity", OpenSceneMode.Single);
            SessionState.SetBool(RunningKey, true); EditorApplication.update += Update; EditorApplication.isPlaying = true;
        }
        private static void Update()
        {
            if (!EditorApplication.isPlaying) return;
            if (!initialized) { initialized = true; startedAt = EditorApplication.timeSinceStartup; return; }
            PlayerAutoAttack attack = Object.FindObjectOfType<PlayerAutoAttack>();
            if (attack != null) attack.enabled = false;
            if (EditorApplication.timeSinceStartup - startedAt < 22d) return;
            PlayerMovement movement = Object.FindObjectOfType<PlayerMovement>();
            Health player = movement != null ? movement.GetComponent<Health>() : null;
            CastleObjective castle = Object.FindObjectOfType<CastleObjective>();
            EnemyBrain[] activeEnemies = Object.FindObjectsOfType<EnemyBrain>();
            int playerHp = player != null ? player.CurrentHealth : -1;
            int homeHp = castle != null ? castle.Health.CurrentHealth : -1;
            float nearestHome = float.PositiveInfinity;
            for (int i = 0; i < activeEnemies.Length; i++)
                nearestHome = Mathf.Min(nearestHome, Vector3.Distance(activeEnemies[i].transform.position, castle.transform.position));
            string enemyPosition = activeEnemies.Length > 0 ? activeEnemies[0].transform.position.ToString("F1") : "none";
            string homePosition = castle != null ? castle.transform.position.ToString("F1") : "none";
            Debug.Log($"ROAD_DEFENSE_SMOKE activeEnemies={activeEnemies.Length} playerHp={playerHp} homeHp={homeHp} nearest={nearestHome:F1} enemy={enemyPosition} home={homePosition}");
            int exitCode = activeEnemies.Length > 0 && playerHp == 100 && homeHp < 250 ? 0 : 5;
            SessionState.EraseBool(RunningKey); EditorApplication.update -= Update;
            EditorApplication.isPlaying = false; EditorApplication.Exit(exitCode);
        }
    }
}
#endif
