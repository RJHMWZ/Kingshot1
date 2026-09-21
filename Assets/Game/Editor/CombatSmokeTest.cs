#if UNITY_EDITOR
using System;
using Kingshot.Gameplay;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

namespace Kingshot.Editor
{
    [InitializeOnLoad]
    public static class CombatSmokeTest
    {
        private const string GameplayScene = "Assets/Game/Scenes/Gameplay.unity";
        private const string RunningKey = "Kingshot.CombatSmokeTest.Running";
        private static double playStartedAt;
        private static bool timerStarted;

        static CombatSmokeTest()
        {
            if (SessionState.GetBool(RunningKey, false))
            {
                EditorApplication.update -= Update;
                EditorApplication.update += Update;
            }
        }

        public static void RunAndExit()
        {
            EditorSceneManager.OpenScene(GameplayScene, OpenSceneMode.Single);
            SessionState.SetBool(RunningKey, true);
            EditorApplication.update += Update;
            EditorApplication.isPlaying = true;
        }

        private static void Update()
        {
            if (!EditorApplication.isPlaying)
            {
                return;
            }

            if (!timerStarted)
            {
                timerStarted = true;
                playStartedAt = EditorApplication.timeSinceStartup;
                return;
            }

            if (EditorApplication.timeSinceStartup - playStartedAt < 4d)
            {
                return;
            }

            EnemyBrain[] enemyBrains = UnityEngine.Object.FindObjectsOfType<EnemyBrain>(true);
            int totalHealth = 0;
            int deadCount = 0;
            foreach (EnemyBrain enemyBrain in enemyBrains)
            {
                Health enemy = enemyBrain.GetComponent<Health>();
                totalHealth += enemy.CurrentHealth;
                if (enemy.IsDead)
                {
                    deadCount++;
                }
            }

            ArrowProjectile[] arrows = UnityEngine.Object.FindObjectsOfType<ArrowProjectile>(true);
            PlayerAutoAttack autoAttack = UnityEngine.Object.FindObjectOfType<PlayerAutoAttack>(true);
            Debug.Log(
                $"COMBAT_SMOKE enemies={enemyBrains.Length} totalHealth={totalHealth} " +
                $"dead={deadCount} arrows={arrows.Length} autoAttack={(autoAttack != null)}");

            EditorApplication.update -= Update;
            SessionState.EraseBool(RunningKey);
            EditorApplication.isPlaying = false;
            EditorApplication.Exit(totalHealth < enemyBrains.Length * 3 ? 0 : 2);
        }
    }
}
#endif
