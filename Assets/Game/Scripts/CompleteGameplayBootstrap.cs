using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Kingshot.Gameplay
{
    public sealed class CompleteGameplayBootstrap : MonoBehaviour
    {
        [SerializeField] private Transform player;
        [SerializeField] private Transform combatRoot;
        [SerializeField] private Canvas gameplayCanvas;
        [SerializeField] private GameObject enemyPrefab;
        [SerializeField] private GameObject archerPrefab;
        [SerializeField] private GameObject cavalryPrefab;
        [SerializeField] private GameObject workerPrefab;
        [SerializeField] private GameObject towerModel;
        [SerializeField] private Transform homeSceneObject;
        private readonly List<PurchaseZone> zones = new List<PurchaseZone>(3);
        private GameSession session; private PlayerWallet wallet; private Health playerHealth; private Health castleHealth;
        private Transform coinRoot; private Transform unlockRoot; private GameplayHUD hud; private GuidePointer guide;
        private Transform castleTransform;
        private EnemyWaveSpawner enemySpawner;
        private int completedZones; private bool flowReady;

        public void Configure(Transform playerRoot, Transform combat, Canvas canvas,
            GameObject enemy, GameObject archer, GameObject cavalry, GameObject worker, GameObject tower, Transform homeObject)
        {
            player = playerRoot; combatRoot = combat; gameplayCanvas = canvas;
            enemyPrefab = enemy; archerPrefab = archer; cavalryPrefab = cavalry; workerPrefab = worker; towerModel = tower;
            homeSceneObject = homeObject;
        }

        private void Start()
        {
            if (player == null || combatRoot == null || gameplayCanvas == null)
            { Debug.LogError("CompleteGameplayBootstrap requires PlayerRoot, CombatRoot and PlayerUI.", this); enabled = false; return; }
            BuildRoots(); BuildPlayer(); BuildCastle(); BuildEconomy(); BuildZonesAndUnlocks(); BuildGuideAndHud(); BuildEnemyRoad();
            GameplayAudio audio = gameObject.AddComponent<GameplayAudio>();
            audio.Configure(wallet, playerHealth, session, player.GetComponent<PlayerAutoAttack>());
            flowReady = true;
        }

        private void BuildRoots()
        {
            session = gameObject.AddComponent<GameSession>();
            coinRoot = new GameObject("CoinRoot").transform; coinRoot.SetParent(transform, false);
            unlockRoot = new GameObject("UnlockRoot").transform; unlockRoot.SetParent(transform, false);
            new GameObject("EffectRoot").transform.SetParent(transform, false);
        }

        private void BuildPlayer()
        {
            wallet = player.gameObject.AddComponent<PlayerWallet>();
            playerHealth = player.gameObject.AddComponent<Health>(); playerHealth.Configure(100);
            PlayerSurvival survival = player.gameObject.AddComponent<PlayerSurvival>(); survival.Configure(session);
            player.gameObject.AddComponent<DamageFlash>();
        }

        private void BuildCastle()
        {
            GameObject castle;
            if (homeSceneObject != null)
            {
                castle = homeSceneObject.gameObject;
            }
            else
            {
                castle = GameObject.CreatePrimitive(PrimitiveType.Cube); castle.name = "CastleObjective";
                castle.transform.SetParent(transform, false); castle.transform.position = player.position + new Vector3(0f, 2f, -8f);
                castle.transform.localScale = new Vector3(6f, 4f, 5f); castle.GetComponent<Renderer>().material.color = new Color(0.55f, 0.55f, 0.62f);
            }
            castleTransform = castle.transform;
            castleHealth = castle.AddComponent<Health>(); CastleObjective objective = castle.AddComponent<CastleObjective>(); objective.Configure(session, 250);
            castle.AddComponent<DamageFlash>();
        }

        private void BuildEconomy()
        {
            GameObject mine = GameObject.CreatePrimitive(PrimitiveType.Cylinder); mine.name = "ActiveGoldMine";
            mine.transform.SetParent(transform, false); mine.transform.position = player.position + new Vector3(-5f, 1f, 5f);
            mine.transform.localScale = new Vector3(2f, 1f, 2f); mine.GetComponent<Renderer>().material.color = new Color(0.85f, 0.62f, 0.08f);
            GoldMineProducer producer = mine.AddComponent<GoldMineProducer>(); producer.Configure(player, wallet, coinRoot);
            AddVisual(mine.transform, workerPrefab, new Vector3(1.5f, -1f, 0f), Vector3.one);
        }

        private void BuildZonesAndUnlocks()
        {
            int[] costs = { 10, 15, 10 }; Vector3[] offsets = { new Vector3(5f, .05f, 5f), new Vector3(10f, .05f, 8f), new Vector3(15f, .05f, 10f) };
            for (int i = 0; i < costs.Length; i++)
            {
                GameObject zoneObject = GameObject.CreatePrimitive(PrimitiveType.Cylinder); zoneObject.name = "PurchaseZone_" + (i + 1);
                zoneObject.transform.SetParent(transform, false); zoneObject.transform.position = player.position + offsets[i]; zoneObject.transform.localScale = new Vector3(2.2f, .05f, 2.2f);
                Collider collider = zoneObject.GetComponent<Collider>(); if (collider != null) Destroy(collider);
                PurchaseZone zone = zoneObject.AddComponent<PurchaseZone>(); zone.Configure(player, wallet, costs[i], i == 0); zone.Completed += OnZoneCompleted; zones.Add(zone);
            }
        }

        private void BuildGuideAndHud()
        {
            GameObject pointer = GameObject.CreatePrimitive(PrimitiveType.Cylinder); pointer.name = "GuideArrow";
            Destroy(pointer.GetComponent<Collider>()); pointer.transform.SetParent(transform, false);
            pointer.transform.localScale = new Vector3(0.22f, 0.8f, 0.22f); pointer.GetComponent<Renderer>().material.color = Color.yellow;
            guide = pointer.AddComponent<GuidePointer>(); guide.Configure(player); guide.SetTarget(zones[0].transform);

            GameObject safeArea = new GameObject("SafeArea", typeof(RectTransform), typeof(SafeAreaFitter));
            safeArea.transform.SetParent(gameplayCanvas.transform, false);
            hud = safeArea.AddComponent<GameplayHUD>(); hud.Configure(wallet, playerHealth, castleHealth, session);
            hud.SetGuide("靠近金矿收集金币，然后前往黄色指引区域");
        }

        private void BuildEnemyRoad()
        {
            GameObject pathRoot = new GameObject("EnemyRoadPath"); pathRoot.transform.SetParent(combatRoot, false);
            Vector3 homePosition = castleTransform.position;
            Vector3[] positions =
            {
                homePosition + new Vector3(16f, 0f, 14f), homePosition + new Vector3(12f, 0f, 10f),
                homePosition + new Vector3(8f, 0f, 7f), homePosition + new Vector3(4f, 0f, 3f), homePosition
            };
            Transform[] route = new Transform[positions.Length];
            for (int i = 0; i < positions.Length; i++)
            {
                GameObject waypoint = new GameObject("Waypoint_" + i); waypoint.transform.SetParent(pathRoot.transform, false);
                waypoint.transform.position = positions[i]; route[i] = waypoint.transform;
            }
            GameObject spawnerObject = new GameObject("EnemyWaveSpawner"); spawnerObject.transform.SetParent(combatRoot, false);
            enemySpawner = spawnerObject.AddComponent<EnemyWaveSpawner>();
            enemySpawner.Configure(enemyPrefab, route, castleHealth, player, wallet, coinRoot);
        }

        private void OnZoneCompleted(PurchaseZone zone)
        {
            zone.Completed -= OnZoneCompleted; completedZones++;
            SpawnUnlock(completedZones);
            if (completedZones < zones.Count)
            { zones[completedZones].gameObject.SetActive(true); guide.SetTarget(zones[completedZones].transform); hud.SetGuide("收集金币并前往下一个建造区域"); }
            else
            {
                guide.SetTarget(null); hud.SetGuide("守住家园，消灭道路上的最后一批敌人");
                enemySpawner.StopAfter(15f);
            }
        }

        private void SpawnUnlock(int index)
        {
            GameObject unlocked = GameObject.CreatePrimitive(index == 1 ? PrimitiveType.Capsule : PrimitiveType.Cube);
            unlocked.name = index == 1 ? "AllySoldier" : index == 2 ? "ArrowTower" : "Barracks";
            unlocked.transform.SetParent(unlockRoot, false); unlocked.transform.position = player.position + new Vector3(index * 3f, 1f, -3f);
            unlocked.GetComponent<Renderer>().material.color = new Color(0.15f, 0.45f, 0.95f);
            unlocked.AddComponent<UnlockPulse>();
            if (index == 1)
            {
                AddVisual(unlocked.transform, archerPrefab, Vector3.down, Vector3.one);
                unlocked.AddComponent<AllyCombatant>();
            }
            else
            {
                AddVisual(unlocked.transform, index == 2 ? towerModel : cavalryPrefab, Vector3.down, Vector3.one);
                unlocked.AddComponent<TowerAutoAttack>();
            }
        }

        private static void AddVisual(Transform parent, GameObject prefab, Vector3 localPosition, Vector3 localScale)
        {
            if (prefab == null) return;
            GameObject visual = Instantiate(prefab, parent); visual.name = prefab.name;
            visual.transform.localPosition = localPosition; visual.transform.localRotation = Quaternion.Euler(-90f, 0f, 0f);
            visual.transform.localScale = localScale;
            Collider[] colliders = visual.GetComponentsInChildren<Collider>(true);
            for (int i = 0; i < colliders.Length; i++) colliders[i].enabled = false;
            Animator animator = visual.GetComponentInChildren<Animator>(true); if (animator != null) animator.applyRootMotion = false;
        }

        private void LateUpdate()
        {
            if (flowReady && completedZones == zones.Count && enemySpawner != null && enemySpawner.IsFinished && session.IsPlaying) session.Win();
        }

        private void OnDestroy()
        { for (int i = 0; i < zones.Count; i++) if (zones[i] != null) zones[i].Completed -= OnZoneCompleted; }
    }
}
