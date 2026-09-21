using UnityEngine;

namespace Kingshot.Gameplay
{
    [RequireComponent(typeof(Health))]
    public sealed class EnemyLoot : MonoBehaviour
    {
        private Health health; private Transform player; private PlayerWallet wallet; private Transform coinRoot;
        public void Configure(Transform playerTransform, PlayerWallet playerWallet, Transform root)
        { player = playerTransform; wallet = playerWallet; coinRoot = root; }
        private void Awake() => health = GetComponent<Health>();
        private void OnEnable() { if (health != null) health.OnDied += Drop; }
        private void OnDisable() { if (health != null) health.OnDied -= Drop; }
        private void Drop()
        {
            if (player == null || wallet == null) return;
            for (int i = 0; i < 3; i++)
                CoinPickup.Spawn(transform.position + Random.insideUnitSphere, player, wallet, coinRoot);
        }
    }
}
