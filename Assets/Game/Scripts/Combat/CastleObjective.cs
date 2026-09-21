using UnityEngine;

namespace Kingshot.Gameplay
{
    [RequireComponent(typeof(Health))]
    public sealed class CastleObjective : MonoBehaviour
    {
        private Health health;
        private GameSession session;
        public Health Health => health;
        public void Configure(GameSession gameSession, int hitPoints)
        { session = gameSession; health = GetComponent<Health>(); health.Configure(hitPoints); }
        private void Awake() => health = GetComponent<Health>();
        private void OnEnable() { if (health != null) health.OnDied += OnDestroyed; }
        private void OnDisable() { if (health != null) health.OnDied -= OnDestroyed; }
        private void OnDestroyed() => session?.Lose();
    }
}
