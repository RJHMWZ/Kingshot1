using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class EnemyMeleeAttack : MonoBehaviour
    {
        [SerializeField, Min(0.1f)] private float range = 1.8f;
        [SerializeField, Min(0.1f)] private float interval = 1f;
        [SerializeField, Min(1)] private int damage = 5;
        private Health self;
        private Health player;
        private Health castle;
        private float nextAttack;

        public void Configure(Health playerHealth, Health castleHealth)
        { player = playerHealth; castle = castleHealth; self = GetComponent<Health>(); }

        private void Awake() => self = GetComponent<Health>();
        private void Update()
        {
            if (self == null || self.IsDead || Time.time < nextAttack) return;
            Health target = NearestValidTarget();
            if (target == null) return;
            nextAttack = Time.time + interval;
            target.TakeDamage(damage);
        }

        private Health NearestValidTarget()
        {
            Health result = null; float best = range * range;
            Test(player, ref result, ref best); Test(castle, ref result, ref best);
            return result;
        }

        private void Test(Health candidate, ref Health result, ref float best)
        {
            if (candidate == null || candidate.IsDead || !candidate.isActiveAndEnabled) return;
            Vector3 delta = candidate.transform.position - transform.position; delta.y = 0f;
            float distance = delta.sqrMagnitude;
            if (distance <= best) { best = distance; result = candidate; }
        }
    }
}
