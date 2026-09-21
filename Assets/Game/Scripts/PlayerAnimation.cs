using UnityEngine;

namespace Kingshot.Gameplay
{
    [DefaultExecutionOrder(100)]
    public sealed class PlayerAnimation : MonoBehaviour
    {
        private static readonly int IdleState = Animator.StringToHash("Base Layer.idle");
        private static readonly int MoveState = Animator.StringToHash("Base Layer.move");
        private static readonly int AttackState = Animator.StringToHash("Base Layer.atk");
        private static readonly int DieState = Animator.StringToHash("Base Layer.die");

        [SerializeField] private Animator animator;
        [SerializeField] private PlayerMovement movement;
        [SerializeField, Min(0f)] private float transitionDuration = 0.08f;

        private bool? wasMoving;
        private float attackEndsAt;
        private bool isAttacking;
        private bool isDead;

        private void Awake()
        {
            if (animator == null)
            {
                animator = GetComponentInChildren<Animator>(true);
            }

            if (movement == null)
            {
                movement = GetComponent<PlayerMovement>();
            }

            if (animator != null)
            {
                animator.applyRootMotion = false;
            }
            else
            {
                Debug.LogError("PlayerAnimation could not find the king Animator.", this);
            }
        }

        private void Start()
        {
            PlayState(false, 0f);
        }

        private void Update()
        {
            if (isDead)
            {
                return;
            }

            if (isAttacking)
            {
                if (Time.time < attackEndsAt)
                {
                    return;
                }

                isAttacking = false;
                wasMoving = null;
            }

            bool isMoving = movement != null && movement.IsMoving;
            if (wasMoving != isMoving)
            {
                PlayState(isMoving, transitionDuration);
            }
        }

        public void PlayAttack(float duration)
        {
            if (isDead || animator == null)
            {
                return;
            }

            isAttacking = true;
            attackEndsAt = Time.time + Mathf.Max(0f, duration);
            animator.CrossFade(AttackState, transitionDuration);
        }

        public void CancelAttack()
        {
            if (isDead || !isAttacking)
            {
                return;
            }

            isAttacking = false;
            wasMoving = null;
        }

        public void PlayDeath()
        {
            if (isDead)
            {
                return;
            }

            isDead = true;
            isAttacking = false;
            if (animator != null)
            {
                animator.CrossFade(DieState, transitionDuration);
            }
        }

        private void PlayState(bool moving, float duration)
        {
            wasMoving = moving;
            if (animator != null)
            {
                animator.CrossFade(moving ? MoveState : IdleState, duration);
            }
        }
    }
}
