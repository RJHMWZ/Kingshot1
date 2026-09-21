using System;
using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class PlayerWallet : MonoBehaviour
    {
        [SerializeField, Min(1)] private int capacity = 100;
        [SerializeField, Min(0)] private int startingCoins;
        public event Action<int, int> Changed;
        public int Coins { get; private set; }
        public int Capacity => capacity;

        private void Awake() => Coins = Mathf.Clamp(startingCoins, 0, capacity);
        public int Add(int amount)
        {
            int accepted = Mathf.Min(Mathf.Max(0, amount), capacity - Coins);
            Coins += accepted;
            if (accepted > 0) Changed?.Invoke(Coins, capacity);
            return accepted;
        }

        public bool SpendOne()
        {
            if (Coins <= 0) return false;
            Coins--;
            Changed?.Invoke(Coins, capacity);
            return true;
        }
    }
}
