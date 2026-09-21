using System.Collections.Generic;
using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class EnemyWaveSpawner : MonoBehaviour
    {
        [SerializeField, Min(0.2f)] private float spawnInterval = 2f;
        [SerializeField, Min(1)] private int maxAlive = 12;
        private readonly List<GameObject> pool = new List<GameObject>(16);
        private GameObject enemyPrefab; private Transform[] route; private Health home;
        private Transform player; private PlayerWallet wallet; private Transform coinRoot;
        private float nextSpawn; private float stopAt = float.PositiveInfinity;
        public bool IsFinished => Time.time >= stopAt && EnemyRegistry.LivingCount == 0;

        public void Configure(GameObject prefab, Transform[] path, Health homeHealth, Transform playerTransform, PlayerWallet playerWallet, Transform coins)
        {
            enemyPrefab = prefab; route = path; home = homeHealth; player = playerTransform; wallet = playerWallet; coinRoot = coins;
            nextSpawn = Time.time + 0.5f;
        }

        public void StopAfter(float seconds) => stopAt = Mathf.Min(stopAt, Time.time + Mathf.Max(0f, seconds));

        private void Update()
        {
            if (enemyPrefab == null || route == null || route.Length == 0 || home == null || home.IsDead) return;
            if (Time.time >= stopAt || Time.time < nextSpawn || EnemyRegistry.LivingCount >= maxAlive) return;
            nextSpawn = Time.time + spawnInterval; Spawn();
        }

        private void Spawn()
        {
            GameObject enemy = null;
            for (int i = 0; i < pool.Count; i++) if (!pool[i].activeSelf) { enemy = pool[i]; break; }
            if (enemy == null) { enemy = CreateEnemy(); pool.Add(enemy); }
            enemy.transform.position = route[0].position; enemy.transform.rotation = Quaternion.identity;
            enemy.GetComponent<EnemyBrain>().ConfigurePath(route, home); enemy.SetActive(true);
        }

        private GameObject CreateEnemy()
        {
            GameObject root = new GameObject("RoadEnemy"); root.transform.SetParent(transform, false);
            GameObject visual = Instantiate(enemyPrefab, root.transform); visual.name = "Visual";
            visual.transform.localPosition = Vector3.zero; visual.transform.localRotation = Quaternion.Euler(-90f, 0f, 0f);
            CharacterController controller = root.AddComponent<CharacterController>(); controller.radius = 0.45f; controller.height = 2f; controller.center = Vector3.up;
            controller.detectCollisions = false;
            for (int i = 0; i < pool.Count; i++)
            {
                CharacterController other = pool[i].GetComponent<CharacterController>();
                if (other != null) Physics.IgnoreCollision(controller, other, true);
            }
            Health health = root.AddComponent<Health>(); health.Configure(3);
            root.AddComponent<EnemyAnimation>(); EnemyBrain brain = root.AddComponent<EnemyBrain>(); brain.ConfigurePath(route, home);
            EnemyLoot loot = root.AddComponent<EnemyLoot>(); loot.Configure(player, wallet, coinRoot);
            root.AddComponent<DamageFlash>(); root.SetActive(false); return root;
        }
    }
}
