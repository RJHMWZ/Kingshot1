using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class GuidePointer : MonoBehaviour
    {
        private Transform player; private Transform target; private float idleSince;
        public void Configure(Transform playerTransform) { player = playerTransform; idleSince = Time.time; }
        public void SetTarget(Transform nextTarget) { target = nextTarget; gameObject.SetActive(target != null); }
        private void Update()
        {
            if (player == null || target == null) return;
            transform.position = player.position + Vector3.up * 2.8f;
            Vector3 direction = target.position - player.position; direction.y = 0f;
            if (direction.sqrMagnitude > 0.01f) transform.rotation = Quaternion.LookRotation(direction) * Quaternion.Euler(90f, 0f, 0f);
            transform.localScale = Vector3.one * (1f + Mathf.Sin(Time.time * 4f) * 0.15f);
        }
    }
}
