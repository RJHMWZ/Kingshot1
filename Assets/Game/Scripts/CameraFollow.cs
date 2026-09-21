using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class CameraFollow : MonoBehaviour
    {
        [SerializeField] private Transform target;
        [SerializeField] private PlayerMovement playerMovement;
        [SerializeField] private Vector3 landscapeOffset = new Vector3(0f, 50f, -26.5f);
        [SerializeField, Min(1f)] private float portraitDistanceScale = 1.25f;
        [SerializeField, Min(0f)] private float smoothTime = 0.2f;
        [SerializeField, Min(1f)] private float idleFieldOfView = 36.8f;
        [SerializeField, Min(1f)] private float movingFieldOfView = 34.8f;
        [SerializeField, Min(0f)] private float fieldOfViewSmooth = 8f;

        private Vector3 velocity;
        private Camera followCamera;

        private void Awake()
        {
            followCamera = GetComponent<Camera>();
            if (followCamera == null)
            {
                Debug.LogError("CameraFollow requires a Camera component.", this);
            }
        }

        private void LateUpdate()
        {
            if (target == null)
            {
                return;
            }

            bool isPortrait = Screen.height > Screen.width;
            Vector3 activeOffset = isPortrait
                ? landscapeOffset * portraitDistanceScale
                : landscapeOffset;
            Vector3 desiredPosition = target.position + activeOffset;
            transform.position = Vector3.SmoothDamp(
                transform.position, desiredPosition, ref velocity, smoothTime);

            if (followCamera != null && !followCamera.orthographic)
            {
                float targetFieldOfView = playerMovement != null && playerMovement.IsMoving
                    ? movingFieldOfView
                    : idleFieldOfView;
                float blend = 1f - Mathf.Exp(-fieldOfViewSmooth * Time.deltaTime);
                followCamera.fieldOfView = Mathf.Lerp(
                    followCamera.fieldOfView, targetFieldOfView, blend);
            }
        }

        public void Configure(Transform followTarget, Vector3 followOffset)
        {
            target = followTarget;
            playerMovement = followTarget != null
                ? followTarget.GetComponent<PlayerMovement>()
                : null;
            landscapeOffset = followOffset;
        }
    }
}
