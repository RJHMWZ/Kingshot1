using UnityEngine;

namespace Kingshot.Gameplay
{
    [RequireComponent(typeof(Health))]
    public sealed class DamageFlash : MonoBehaviour
    {
        private Health health; private Renderer[] renderers; private Color[] colors; private float restoreAt;
        private void Awake()
        {
            health = GetComponent<Health>(); renderers = GetComponentsInChildren<Renderer>(true); colors = new Color[renderers.Length];
            for (int i = 0; i < renderers.Length; i++) colors[i] = renderers[i].material.color;
        }
        private void OnEnable() { if (health != null) health.OnDamaged += Flash; }
        private void OnDisable() { if (health != null) health.OnDamaged -= Flash; Restore(); }
        private void Flash(int damage)
        { restoreAt = Time.time + 0.1f; for (int i = 0; i < renderers.Length; i++) renderers[i].material.color = Color.white; }
        private void Update() { if (restoreAt > 0f && Time.time >= restoreAt) Restore(); }
        private void Restore()
        { restoreAt = 0f; if (renderers == null) return; for (int i = 0; i < renderers.Length; i++) if (renderers[i] != null) renderers[i].material.color = colors[i]; }
    }
}
