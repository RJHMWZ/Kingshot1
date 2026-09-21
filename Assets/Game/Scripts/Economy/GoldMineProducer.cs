using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class GoldMineProducer : MonoBehaviour
    {
        [SerializeField, Min(0.1f)] private float productionInterval = 1.5f;
        [SerializeField, Min(1)] private int coinsPerCycle = 3;
        private Transform player;
        private PlayerWallet wallet;
        private Transform coinRoot;
        private float nextProduction;

        public void Configure(Transform playerTransform, PlayerWallet playerWallet, Transform parent)
        { player = playerTransform; wallet = playerWallet; coinRoot = parent; }
        private void Start() => nextProduction = Time.time + 0.5f;
        private void Update()
        {
            if (Time.time < nextProduction || player == null || wallet == null) return;
            nextProduction = Time.time + productionInterval;
            for (int i = 0; i < coinsPerCycle; i++)
            {
                Vector2 random = Random.insideUnitCircle * 1.4f;
                CoinPickup.Spawn(transform.position + new Vector3(random.x, 0f, random.y), player, wallet, coinRoot);
            }
        }
    }
}
