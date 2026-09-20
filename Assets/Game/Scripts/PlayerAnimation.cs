using UnityEngine;

namespace Kingshot.Gameplay
{
    [DefaultExecutionOrder(100)]
    public sealed class PlayerAnimation : MonoBehaviour
    {
        private static readonly int IdleState = Animator.StringToHash("Base Layer.idle");
        private static readonly int MoveState = Animator.StringToHash("Base Layer.move");

        [SerializeField] private Animator animator;
        [SerializeField] private PlayerMovement movement;
        [SerializeField, Min(0f)] private float transitionDuration = 0.08f;

        private bool? wasMoving;

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
        }

        private void Start()
        {
            PlayState(false, 0f);
        }

        private void Update()
        {
            bool isMoving = movement != null && movement.IsMoving;
            if (wasMoving != isMoving)
            {
                PlayState(isMoving, transitionDuration);
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
