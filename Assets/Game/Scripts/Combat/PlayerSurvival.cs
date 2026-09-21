using UnityEngine;

namespace Kingshot.Gameplay
{
    [RequireComponent(typeof(Health))]
    public sealed class PlayerSurvival : MonoBehaviour
    {
        private Health health;
        private PlayerAnimation animation;
        private PlayerMovement movement;
        private GameSession session;
        public void Configure(GameSession gameSession) => session = gameSession;
        private void Awake()
        { health = GetComponent<Health>(); animation = GetComponent<PlayerAnimation>(); movement = GetComponent<PlayerMovement>(); }
        private void OnEnable() { if (health != null) health.OnDied += Die; }
        private void OnDisable() { if (health != null) health.OnDied -= Die; }
        private void Die()
        {
            if (animation != null) animation.PlayDeath();
            if (movement != null) movement.enabled = false;
            session?.Lose();
        }
    }
}
