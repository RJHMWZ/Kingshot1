using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class ArrowProjectile : MonoBehaviour
    {
        [SerializeField, Min(0.1f)] private float defaultSpeed = 18f;
        [SerializeField, Min(0.1f)] private float maximumLifetime = 3f;
        [SerializeField, Min(0f)] private float chestHeight = 1.2f;

        private Health target;
        private float speed;
        private int damage;
        private float destroyAt;
        private bool initialized;
        private ArrowProjectilePool pool;

        public void SetPool(ArrowProjectilePool owner)
        {
            pool = owner;
        }

        public void Initialize(Health attackTarget, float projectileSpeed, int attackDamage)
        {
            target = attackTarget;
            speed = projectileSpeed > 0f ? projectileSpeed : defaultSpeed;
            damage = Mathf.Max(0, attackDamage);
            destroyAt = Time.time + maximumLifetime;
            initialized = true;
        }

        private void OnDisable()
        {
            initialized = false;
            target = null;
        }

        private void Update()
        {
            if (!initialized || target == null || !target.isActiveAndEnabled || target.IsDead ||
                Time.time >= destroyAt)
            {
                Recycle();
                return;
            }

            Vector3 targetPosition = target.transform.position + Vector3.up * chestHeight;
            Vector3 direction = targetPosition - transform.position;
            float distance = direction.magnitude;
            float step = speed * Time.deltaTime;

            if (distance <= Mathf.Max(0.15f, step))
            {
                target.TakeDamage(damage);
                Recycle();
                return;
            }

            direction /= distance;
            transform.position += direction * step;
            transform.rotation = Quaternion.LookRotation(direction, Vector3.up);
        }

        private void Recycle()
        {
            initialized = false;
            if (pool != null)
            {
                pool.Release(this);
            }
            else
            {
                Destroy(gameObject);
            }
        }
    }
}
