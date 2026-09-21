using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class TowerAutoAttack : MonoBehaviour
    {
        [SerializeField] private float range = 14f;
        [SerializeField] private float interval = 0.7f;
        [SerializeField] private int damage = 1;
        private float nextAttack;
        private void Update()
        {
            if (Time.time < nextAttack) return;
            Health target = EnemyRegistry.GetNearestLivingEnemy(transform.position, range);
            if (target == null) return;
            nextAttack = Time.time + interval;
            target.TakeDamage(damage);
            Debug.DrawLine(transform.position + Vector3.up * 2f, target.transform.position + Vector3.up, Color.yellow, 0.25f);
        }
    }
}
