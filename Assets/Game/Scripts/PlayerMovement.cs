using UnityEngine;

namespace Kingshot.Gameplay
{
    [RequireComponent(typeof(CharacterController), typeof(PlayerInputReader))]
    public sealed class PlayerMovement : MonoBehaviour
    {
        [SerializeField] private Transform cameraTransform;
        [SerializeField, Min(0f)] private float moveSpeed = 4.5f;
        [SerializeField, Min(0f)] private float turnSpeed = 720f;
        [SerializeField] private float gravity = -20f;

        private CharacterController controller;
        private PlayerInputReader inputReader;
        private float verticalVelocity;

        public bool IsMoving { get; private set; }

        private void Awake()
        {
            controller = GetComponent<CharacterController>();
            inputReader = GetComponent<PlayerInputReader>();
            if (cameraTransform == null && Camera.main != null)
            {
                cameraTransform = Camera.main.transform;
            }
        }

        private void Update()
        {
            Vector2 input = Vector2.ClampMagnitude(inputReader.MoveInput, 1f);
            Vector3 forward = cameraTransform != null ? cameraTransform.forward : Vector3.forward;
            Vector3 right = cameraTransform != null ? cameraTransform.right : Vector3.right;
            forward.y = 0f;
            right.y = 0f;
            forward.Normalize();
            right.Normalize();

            Vector3 planarDirection = Vector3.ClampMagnitude(
                forward * input.y + right * input.x, 1f);
            IsMoving = planarDirection.sqrMagnitude > 0.0001f;

            if (IsMoving)
            {
                Quaternion targetRotation = Quaternion.LookRotation(planarDirection, Vector3.up);
                transform.rotation = Quaternion.RotateTowards(
                    transform.rotation, targetRotation, turnSpeed * Time.deltaTime);
            }

            if (controller.isGrounded && verticalVelocity < 0f)
            {
                verticalVelocity = -2f;
            }
            else
            {
                verticalVelocity += gravity * Time.deltaTime;
            }

            Vector3 velocity = planarDirection * moveSpeed + Vector3.up * verticalVelocity;
            controller.Move(velocity * Time.deltaTime);
        }

        public void SetCamera(Transform targetCamera)
        {
            cameraTransform = targetCamera;
        }
    }
}
