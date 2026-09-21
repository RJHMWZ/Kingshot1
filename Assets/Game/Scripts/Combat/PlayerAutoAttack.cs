using System;
using UnityEngine;

namespace Kingshot.Gameplay
{
    [DefaultExecutionOrder(50)]
    public sealed class PlayerAutoAttack : MonoBehaviour
    {
        public event Action ShotFired;
        [SerializeField, Min(0.1f)] private float attackRange = 9f;
        [SerializeField, Min(0.01f)] private float attackInterval = 0.8f;
        [SerializeField, Min(0f)] private float attackWindup = 0.25f;
        [SerializeField, Min(1)] private int damage = 1;
        [SerializeField, Min(0.1f)] private float projectileSpeed = 18f;
        [SerializeField, Min(0f)] private float aimTurnSpeed = 720f;
        [SerializeField] private Transform arrowSpawnPoint;
        [SerializeField] private ArrowProjectilePool projectilePool;
        [SerializeField] private PlayerAnimation playerAnimation;

        private Health currentTarget;
        private float windupEndsAt;
        private float nextAttackAt;
        private bool isWindingUp;

        private void Awake()
        {
            if (playerAnimation == null)
            {
                playerAnimation = GetComponent<PlayerAnimation>();
            }

            if (arrowSpawnPoint == null)
            {
                Debug.LogError("PlayerAutoAttack requires an ArrowSpawnPoint reference.", this);
            }

            if (projectilePool == null)
            {
                Debug.LogError("PlayerAutoAttack requires an ArrowProjectilePool reference.", this);
            }

            if (playerAnimation == null)
            {
                Debug.LogError("PlayerAutoAttack requires PlayerAnimation on PlayerRoot.", this);
            }
        }

        private void Update()
        {
            if (isWindingUp)
            {
                if (!IsTargetValid(currentTarget))
                {
                    CancelAttack();
                    return;
                }

                FaceTarget(currentTarget.transform.position);
                if (Time.time >= windupEndsAt)
                {
                    FireArrow();
                }

                return;
            }

            if (Time.time < nextAttackAt || arrowSpawnPoint == null || projectilePool == null)
            {
                return;
            }

            Health target = EnemyRegistry.GetNearestLivingEnemy(transform.position, attackRange);
            if (target != null)
            {
                BeginAttack(target);
            }
        }

        public void Configure(
            Transform spawnPoint, ArrowProjectilePool pool, PlayerAnimation animation)
        {
            arrowSpawnPoint = spawnPoint;
            projectilePool = pool;
            playerAnimation = animation;
        }

        private void BeginAttack(Health target)
        {
            currentTarget = target;
            isWindingUp = true;
            windupEndsAt = Time.time + attackWindup;
            nextAttackAt = Time.time + attackInterval;
            playerAnimation.PlayAttack(attackWindup);
            FaceTarget(target.transform.position);
        }

        private void FireArrow()
        {
            ArrowProjectile projectile = projectilePool.Get();
            Transform arrowTransform = projectile.transform;
            arrowTransform.position = arrowSpawnPoint.position;

            Vector3 direction = currentTarget.transform.position + Vector3.up * 1.2f - arrowTransform.position;
            if (direction.sqrMagnitude > 0.0001f)
            {
                arrowTransform.rotation = Quaternion.LookRotation(direction.normalized, Vector3.up);
            }

            projectile.Initialize(currentTarget, projectileSpeed, damage);
            ShotFired?.Invoke();
            currentTarget = null;
            isWindingUp = false;
        }

        private void CancelAttack()
        {
            currentTarget = null;
            isWindingUp = false;
            playerAnimation.CancelAttack();
        }

        private bool IsTargetValid(Health target)
        {
            if (target == null || !target.isActiveAndEnabled || target.IsDead)
            {
                return false;
            }

            Vector3 difference = target.transform.position - transform.position;
            difference.y = 0f;
            return difference.sqrMagnitude <= attackRange * attackRange;
        }

        private void FaceTarget(Vector3 targetPosition)
        {
            Vector3 direction = targetPosition - transform.position;
            direction.y = 0f;
            if (direction.sqrMagnitude <= 0.0001f)
            {
                return;
            }

            Quaternion targetRotation = Quaternion.LookRotation(direction.normalized, Vector3.up);
            transform.rotation = Quaternion.RotateTowards(
                transform.rotation, targetRotation, aimTurnSpeed * Time.deltaTime);
        }
    }
}
