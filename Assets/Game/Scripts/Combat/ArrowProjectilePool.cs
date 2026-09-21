using System.Collections.Generic;
using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class ArrowProjectilePool : MonoBehaviour
    {
        [SerializeField] private Transform projectileParent;
        [SerializeField, Min(0)] private int prewarmCount = 8;

        private readonly Queue<ArrowProjectile> available = new Queue<ArrowProjectile>();

        private void Awake()
        {
            if (projectileParent == null)
            {
                projectileParent = transform;
            }

            for (int index = available.Count; index < prewarmCount; index++)
            {
                available.Enqueue(CreateProjectile());
            }
        }

        public void Configure(Transform parent)
        {
            projectileParent = parent;
        }

        public ArrowProjectile Get()
        {
            ArrowProjectile projectile = available.Count > 0
                ? available.Dequeue()
                : CreateProjectile();
            projectile.gameObject.SetActive(true);
            return projectile;
        }

        public void Release(ArrowProjectile projectile)
        {
            if (projectile == null || !projectile.gameObject.activeSelf)
            {
                return;
            }

            projectile.gameObject.SetActive(false);
            projectile.transform.SetParent(projectileParent, false);
            available.Enqueue(projectile);
        }

        private ArrowProjectile CreateProjectile()
        {
            GameObject arrow = GameObject.CreatePrimitive(PrimitiveType.Cube);
            arrow.name = "Arrow";
            arrow.transform.SetParent(projectileParent, false);
            arrow.transform.localScale = new Vector3(0.08f, 0.08f, 0.55f);

            Collider placeholderCollider = arrow.GetComponent<Collider>();
            if (placeholderCollider != null)
            {
                Destroy(placeholderCollider);
            }

            ArrowProjectile projectile = arrow.AddComponent<ArrowProjectile>();
            projectile.SetPool(this);
            arrow.SetActive(false);
            return projectile;
        }
    }
}
