using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class AllyCombatant : MonoBehaviour
    {
        private float nextAttack;
        private void Update()
        {
            Health target = EnemyRegistry.GetNearestLivingEnemy(transform.position, 10f);
            if (target == null) return;
            Vector3 delta = target.transform.position - transform.position; delta.y = 0f;
            if (delta.sqrMagnitude > 9f)
            {
                transform.position += delta.normalized * (2.8f * Time.deltaTime);
                transform.rotation = Quaternion.RotateTowards(transform.rotation, Quaternion.LookRotation(delta), 540f * Time.deltaTime);
            }
            else if (Time.time >= nextAttack)
            {
                nextAttack = Time.time + 0.9f; target.TakeDamage(1);
            }
        }
    }
}
