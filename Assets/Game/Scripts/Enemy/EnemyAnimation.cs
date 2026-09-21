using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class EnemyAnimation : MonoBehaviour
    {
        private static readonly int IdleState = Animator.StringToHash("Base Layer.idle");
        private static readonly int MoveState = Animator.StringToHash("Base Layer.move");
        private static readonly int DieState = Animator.StringToHash("Base Layer.die");

        [SerializeField] private Animator animator;
        [SerializeField, Min(0f)] private float transitionDuration = 0.08f;

        private bool isDead;
        private bool? wasMoving;

        private void Awake()
        {
            if (animator == null)
            {
                animator = GetComponentInChildren<Animator>(true);
            }

            if (animator == null)
            {
                Debug.LogError("EnemyAnimation could not find an Animator.", this);
                return;
            }

            animator.applyRootMotion = false;
        }

        private void Start()
        {
            SetMoving(false, true);
        }

        public void SetMoving(bool moving)
        {
            SetMoving(moving, false);
        }

        public void PlayDeath()
        {
            if (isDead)
            {
                return;
            }

            isDead = true;
            if (animator != null)
            {
                animator.CrossFade(DieState, transitionDuration);
            }
        }

        public void ResetState()
        {
            isDead = false;
            wasMoving = null;
            SetMoving(false, true);
        }

        private void SetMoving(bool moving, bool force)
        {
            if (isDead || (!force && wasMoving == moving))
            {
                return;
            }

            wasMoving = moving;
            if (animator != null)
            {
                animator.CrossFade(moving ? MoveState : IdleState, force ? 0f : transitionDuration);
            }
        }
    }
}
