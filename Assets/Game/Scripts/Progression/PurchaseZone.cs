using System;
using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class PurchaseZone : MonoBehaviour
    {
        private int cost = 10;
        private const float SpendInterval = 0.12f;
        private PlayerWallet wallet;
        private Transform player;
        private Renderer zoneRenderer;
        private float nextSpend;
        public event Action<PurchaseZone> Completed;
        public int Paid { get; private set; }
        public int Cost => cost;
        public bool IsCompleted { get; private set; }

        public void Configure(Transform playerTransform, PlayerWallet playerWallet, int requiredCoins, bool available)
        {
            player = playerTransform; wallet = playerWallet; cost = Mathf.Max(1, requiredCoins);
            zoneRenderer = GetComponent<Renderer>();
            gameObject.SetActive(available);
            UpdateColor();
        }

        private void Update()
        {
            if (IsCompleted || player == null || wallet == null || Time.time < nextSpend) return;
            Vector3 delta = player.position - transform.position; delta.y = 0f;
            if (delta.sqrMagnitude > 6.25f || !wallet.SpendOne()) return;
            nextSpend = Time.time + SpendInterval; Paid++; UpdateColor();
            if (Paid < cost) return;
            IsCompleted = true;
            if (zoneRenderer != null) zoneRenderer.enabled = false;
            Completed?.Invoke(this);
        }

        private void UpdateColor()
        {
            if (zoneRenderer != null)
                zoneRenderer.material.color = Color.Lerp(new Color(0.9f, 0.45f, 0.05f), new Color(0.1f, 0.9f, 0.2f), (float)Paid / cost);
        }
    }
}
