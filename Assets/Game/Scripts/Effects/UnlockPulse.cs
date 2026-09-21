using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class UnlockPulse : MonoBehaviour
    {
        private Vector3 targetScale; private float startedAt;
        private void Awake() { targetScale = transform.localScale; transform.localScale = Vector3.zero; startedAt = Time.time; }
        private void Update()
        {
            float t = Mathf.Clamp01((Time.time - startedAt) / 0.45f);
            float overshoot = 1f + Mathf.Sin(t * Mathf.PI) * 0.2f;
            transform.localScale = targetScale * t * overshoot;
            if (t >= 1f) { transform.localScale = targetScale; Destroy(this); }
        }
    }
}
