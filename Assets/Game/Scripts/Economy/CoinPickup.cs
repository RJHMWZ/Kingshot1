using System.Collections.Generic;
using UnityEngine;

namespace Kingshot.Gameplay
{
    public sealed class CoinPickup : MonoBehaviour
    {
        private static readonly Queue<CoinPickup> Pool = new Queue<CoinPickup>();
        private Transform target;
        private PlayerWallet wallet;
        private float lifeEnds;
        private float magnetDelay;
        private int value;

        public static CoinPickup Spawn(Vector3 position, Transform target, PlayerWallet wallet, Transform parent, int value = 1)
        {
            CoinPickup coin = Pool.Count > 0 ? Pool.Dequeue() : Create(parent);
            coin.transform.SetParent(parent, false);
            coin.transform.position = position + Vector3.up * 0.4f;
            coin.target = target;
            coin.wallet = wallet;
            coin.value = value;
            coin.lifeEnds = Time.time + 20f;
            coin.magnetDelay = Time.time + 0.4f;
            coin.gameObject.SetActive(true);
            return coin;
        }

        private static CoinPickup Create(Transform parent)
        {
            GameObject item = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            item.name = "Coin";
            item.transform.SetParent(parent, false);
            item.transform.localScale = new Vector3(0.22f, 0.05f, 0.22f);
            Collider collider = item.GetComponent<Collider>();
            if (collider != null) Destroy(collider);
            item.GetComponent<Renderer>().material.color = new Color(1f, 0.72f, 0.05f);
            item.SetActive(false);
            return item.AddComponent<CoinPickup>();
        }

        private void Update()
        {
            transform.Rotate(0f, 240f * Time.deltaTime, 0f, Space.World);
            if (Time.time >= lifeEnds || target == null || wallet == null) { Recycle(); return; }
            Vector3 delta = target.position + Vector3.up - transform.position;
            float sqrDistance = delta.sqrMagnitude;
            if (Time.time >= magnetDelay && sqrDistance <= 36f)
                transform.position = Vector3.MoveTowards(transform.position, target.position + Vector3.up, 10f * Time.deltaTime);
            if (sqrDistance <= 0.5f && wallet.Add(value) > 0) Recycle();
        }

        private void Recycle()
        {
            if (!gameObject.activeSelf) return;
            gameObject.SetActive(false);
            Pool.Enqueue(this);
        }
    }
}
