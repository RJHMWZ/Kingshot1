using UnityEngine;

namespace Kingshot.Gameplay
{
    [RequireComponent(typeof(CharacterController), typeof(Health), typeof(EnemyAnimation))]
    public sealed class EnemyBrain : MonoBehaviour
    {
        [SerializeField, Min(0.1f)] private float moveSpeed = 4.5f;
        [SerializeField, Min(0f)] private float turnSpeed = 540f;
        [SerializeField] private float gravity = -20f;
        [SerializeField, Min(1)] private int homeDamage = 5;
        [SerializeField, Min(0f)] private float recycleDelay = 2f;
        private CharacterController controller; private Health health; private EnemyAnimation animationController;
        private Collider[] cachedColliders; private Transform[] route; private Health home;
        private int waypointIndex; private float verticalVelocity; private float recycleAt; private bool dead;

        private void Awake()
        {
            controller = GetComponent<CharacterController>(); health = GetComponent<Health>();
            animationController = GetComponent<EnemyAnimation>(); cachedColliders = GetComponentsInChildren<Collider>(true);
        }

        public void ConfigurePath(Transform[] waypoints, Health homeHealth)
        { route = waypoints; home = homeHealth; waypointIndex = 0; }

        private void OnEnable()
        {
            if (health == null) health = GetComponent<Health>();
            health.OnDied += HandleDeath; health.ResetToMaximum(); dead = false; waypointIndex = 0; verticalVelocity = 0f;
            if (controller != null) controller.enabled = true;
            if (cachedColliders != null) for (int i = 0; i < cachedColliders.Length; i++) cachedColliders[i].enabled = true;
            if (animationController != null) animationController.ResetState();
            EnemyRegistry.Register(health);
        }

        private void Start() => EnemyRegistry.Register(health);
        private void OnDisable()
        {
            if (health == null) return;
            health.OnDied -= HandleDeath; EnemyRegistry.Unregister(health);
        }

        private void Update()
        {
            if (dead) { if (Time.time >= recycleAt) gameObject.SetActive(false); return; }
            if (route == null || route.Length == 0 || home == null || home.IsDead) return;
            if (waypointIndex >= route.Length) { ReachHome(); return; }
            Vector3 difference = route[waypointIndex].position - transform.position; difference.y = 0f;
            if (difference.sqrMagnitude <= 0.3f)
            {
                waypointIndex++;
                if (waypointIndex >= route.Length) ReachHome();
                return;
            }
            Vector3 direction = difference.normalized;
            transform.rotation = Quaternion.RotateTowards(transform.rotation, Quaternion.LookRotation(direction), turnSpeed * Time.deltaTime);
            animationController.SetMoving(true);
            if (controller.detectCollisions)
            {
                if (controller.isGrounded && verticalVelocity < 0f) verticalVelocity = -2f; else verticalVelocity += gravity * Time.deltaTime;
            }
            else verticalVelocity = 0f;
            controller.Move((direction * moveSpeed + Vector3.up * verticalVelocity) * Time.deltaTime);
        }

        private void ReachHome()
        {
            if (home != null && !home.IsDead) home.TakeDamage(homeDamage);
            gameObject.SetActive(false);
        }

        private void HandleDeath()
        {
            if (dead) return;
            dead = true; EnemyRegistry.Unregister(health); animationController.PlayDeath();
            if (cachedColliders != null) for (int i = 0; i < cachedColliders.Length; i++) cachedColliders[i].enabled = false;
            controller.enabled = false; recycleAt = Time.time + recycleDelay;
        }
    }
}
