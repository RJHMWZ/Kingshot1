using System.Collections.Generic;
using UnityEngine;

namespace Kingshot.Gameplay
{
    public static class EnemyRegistry
    {
        private static readonly HashSet<Health> Enemies = new HashSet<Health>();

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        private static void ResetRegistry()
        {
            Enemies.Clear();
        }

        public static void Register(Health enemy)
        {
            if (enemy != null && enemy.isActiveAndEnabled && !enemy.IsDead)
            {
                Enemies.Add(enemy);
            }
        }

        public static void Unregister(Health enemy)
        {
            if (enemy != null)
            {
                Enemies.Remove(enemy);
            }
        }

        public static Health GetNearestLivingEnemy(Vector3 position, float range)
        {
            Health nearest = null;
            float nearestSqrDistance = range * range;

            foreach (Health enemy in Enemies)
            {
                if (enemy == null || !enemy.isActiveAndEnabled || enemy.IsDead)
                {
                    continue;
                }

                Vector3 difference = enemy.transform.position - position;
                difference.y = 0f;
                float sqrDistance = difference.sqrMagnitude;
                if (sqrDistance <= nearestSqrDistance)
                {
                    nearestSqrDistance = sqrDistance;
                    nearest = enemy;
                }
            }

            return nearest;
        }

        public static int LivingCount
        {
            get
            {
                int count = 0;
                foreach (Health enemy in Enemies)
                    if (enemy != null && enemy.isActiveAndEnabled && !enemy.IsDead) count++;
                return count;
            }
        }
    }
}
