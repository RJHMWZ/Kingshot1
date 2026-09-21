using System;
using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class Health : MonoBehaviour
    {
        [SerializeField, Min(1)] private int maxHealth = 3;

        public int CurrentHealth { get; private set; }
        public bool IsDead { get; private set; }

        public event Action<int> OnDamaged;
        public event Action OnDied;

        private void Awake()
        {
            ResetToMaximum();
        }

        public void ResetToMaximum()
        {
            CurrentHealth = Mathf.Max(1, maxHealth);
            IsDead = false;
        }

        public void Configure(int maximumHealth, bool refill = true)
        {
            maxHealth = Mathf.Max(1, maximumHealth);
            if (refill) ResetToMaximum();
        }

        public void TakeDamage(int damage)
        {
            if (IsDead || damage <= 0)
            {
                return;
            }

            CurrentHealth = Mathf.Max(0, CurrentHealth - damage);
            OnDamaged?.Invoke(damage);

            if (CurrentHealth == 0)
            {
                IsDead = true;
                OnDied?.Invoke();
            }
        }
    }
}
