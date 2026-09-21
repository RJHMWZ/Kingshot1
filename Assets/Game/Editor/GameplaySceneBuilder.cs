#if UNITY_EDITOR
using System.IO;
using Kingshot.Gameplay;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace Kingshot.Editor
{
    public static class GameplaySceneBuilder
    {
        private const string SourceScene = "Assets/Scenes/SampleScene.unity";
        private const string GameplayScene = "Assets/Game/Scenes/Gameplay.unity";
        private const string KingPrefab = "Assets/ExtractedSkinnedModels/Generated/character_king/character_king.prefab";
        private const string EnemyPrefab = "Assets/ExtractedSkinnedModels/Generated/enemy_soldier/enemy_soldier.prefab";
        private const string ArcherPrefab = "Assets/ExtractedSkinnedModels/Generated/character_archer/character_archer.prefab";
        private const string CavalryPrefab = "Assets/ExtractedSkinnedModels/Generated/player_soldier_cavalry/player_soldier_cavalry.prefab";
        private const string WorkerPrefab = "Assets/ExtractedSkinnedModels/Generated/npc_worker/npc_worker.prefab";
        private const string TowerModel = "Assets/ExtractedModels/Arrow_Tower__64632cf3_04d8b.obj";

        [MenuItem("Kingshot/Build Gameplay Vertical Slice")]
        public static void Build()
        {
            EnsureFolders();
            AssetDatabase.Refresh();

            if (AssetDatabase.LoadAssetAtPath<SceneAsset>(GameplayScene) == null &&
                !AssetDatabase.CopyAsset(SourceScene, GameplayScene))
            {
                throw new IOException("Could not copy SampleScene to Gameplay.unity.");
            }

            Scene scene = EditorSceneManager.OpenScene(GameplayScene, OpenSceneMode.Single);
            Vector3 playerSpawnPosition = GetPlayerSpawnPosition(scene);
            RemoveExistingGeneratedObjects();

            Camera mainCamera = FindMainCamera();
            GameObject combatRoot = BuildCombatRoot(out ArrowProjectilePool projectilePool);
            GameObject playerRoot = BuildPlayer(mainCamera, playerSpawnPosition, projectilePool);
            Canvas gameplayCanvas = BuildJoystick(playerRoot.GetComponent<PlayerInputReader>());
            CompleteGameplayBootstrap bootstrap = combatRoot.AddComponent<CompleteGameplayBootstrap>();
            bootstrap.Configure(playerRoot.transform, combatRoot.transform, gameplayCanvas,
                AssetDatabase.LoadAssetAtPath<GameObject>(EnemyPrefab),
                AssetDatabase.LoadAssetAtPath<GameObject>(ArcherPrefab),
                AssetDatabase.LoadAssetAtPath<GameObject>(CavalryPrefab),
                AssetDatabase.LoadAssetAtPath<GameObject>(WorkerPrefab),
                AssetDatabase.LoadAssetAtPath<GameObject>(TowerModel),
                GameObject.Find("Home") != null ? GameObject.Find("Home").transform : null);
            EditorUtility.SetDirty(bootstrap);
            ConfigureCamera(mainCamera, playerRoot.transform);
            EnsureGround();

            EditorSceneManager.MarkSceneDirty(scene);
            EditorSceneManager.SaveScene(scene, GameplayScene);
            EditorBuildSettings.scenes = new[] { new EditorBuildSettingsScene(GameplayScene, true) };
            AssetDatabase.SaveAssets();
            Debug.Log("Gameplay movement and combat vertical slice built successfully: " + GameplayScene);
        }

        public static void BuildAndExit()
        {
            try
            {
                Build();
                EditorApplication.Exit(0);
            }
            catch (System.Exception exception)
            {
                Debug.LogException(exception);
                EditorApplication.Exit(1);
            }
        }

        private static void EnsureFolders()
        {
            Directory.CreateDirectory("Assets/Game/Scenes");
            Directory.CreateDirectory("Assets/Game/Scripts");
            Directory.CreateDirectory("Assets/Game/Scripts/Combat");
            Directory.CreateDirectory("Assets/Game/Scripts/Enemy");
            Directory.CreateDirectory("Assets/Game/Scripts/Economy");
            Directory.CreateDirectory("Assets/Game/Scripts/Progression");
            Directory.CreateDirectory("Assets/Game/Scripts/Allies");
            Directory.CreateDirectory("Assets/Game/Scripts/UI");
            Directory.CreateDirectory("Assets/Game/Scripts/Effects");
            Directory.CreateDirectory("Assets/Game/Prefabs");
            Directory.CreateDirectory("Assets/Game/UI");
            Directory.CreateDirectory("Assets/Game/Editor");
        }

        private static void RemoveExistingGeneratedObjects()
        {
            string[] names = { "PlayerRoot", "Player", "CombatRoot", "PlayerUI", "EventSystem", "GameGround" };
            GameObject[] roots = SceneManager.GetActiveScene().GetRootGameObjects();
            foreach (GameObject root in roots)
            {
                foreach (string objectName in names)
                {
                    if (root.name == objectName)
                    {
                        Object.DestroyImmediate(root);
                        break;
                    }
                }
            }
        }

        private static Vector3 GetPlayerSpawnPosition(Scene scene)
        {
            foreach (GameObject root in scene.GetRootGameObjects())
            {
                if (root.name == "PlayerRoot" || root.name == "Player")
                {
                    return root.transform.position;
                }
            }

            return Vector3.zero;
        }

        private static GameObject BuildCombatRoot(out ArrowProjectilePool projectilePool)
        {
            GameObject combatRoot = new GameObject("CombatRoot");
            GameObject projectiles = new GameObject("Projectiles");
            projectiles.transform.SetParent(combatRoot.transform, false);
            projectilePool = combatRoot.AddComponent<ArrowProjectilePool>();
            projectilePool.Configure(projectiles.transform);
            EditorUtility.SetDirty(projectilePool);
            return combatRoot;
        }

        private static GameObject BuildPlayer(
            Camera mainCamera, Vector3 spawnPosition, ArrowProjectilePool projectilePool)
        {
            GameObject root = new GameObject("PlayerRoot");
            root.transform.position = spawnPosition;
            root.transform.rotation = Quaternion.identity;

            CharacterController controller = root.AddComponent<CharacterController>();
            controller.radius = 0.5f;
            controller.height = 2f;
            controller.center = Vector3.up;
            controller.stepOffset = 0.3f;
            controller.skinWidth = 0.08f;

            PlayerInputReader input = root.AddComponent<PlayerInputReader>();
            PlayerMovement movement = root.AddComponent<PlayerMovement>();
            PlayerAnimation animation = root.AddComponent<PlayerAnimation>();
            PlayerAutoAttack autoAttack = root.AddComponent<PlayerAutoAttack>();
            movement.SetCamera(mainCamera != null ? mainCamera.transform : null);

            GameObject visual = new GameObject("Visual");
            visual.transform.SetParent(root.transform, false);

            GameObject kingPrefab = AssetDatabase.LoadAssetAtPath<GameObject>(KingPrefab);
            if (kingPrefab == null)
            {
                throw new FileNotFoundException("King prefab not found.", KingPrefab);
            }

            GameObject king = (GameObject)PrefabUtility.InstantiatePrefab(kingPrefab, visual.transform);
            king.name = "character_king";
            king.transform.localPosition = Vector3.zero;
            king.transform.localRotation = Quaternion.Euler(-90f, 0f, 0f);
            king.transform.localScale = Vector3.one;

            Animator animator = king.GetComponentInChildren<Animator>(true);
            if (animator != null)
            {
                animator.applyRootMotion = false;
            }

            GameObject spawnPointObject = new GameObject("ArrowSpawnPoint");
            spawnPointObject.transform.SetParent(visual.transform, false);
            spawnPointObject.transform.localPosition = new Vector3(0f, 1.4f, 0.6f);
            spawnPointObject.transform.localRotation = Quaternion.identity;
            autoAttack.Configure(spawnPointObject.transform, projectilePool, animation);

            EditorUtility.SetDirty(input);
            EditorUtility.SetDirty(movement);
            EditorUtility.SetDirty(animation);
            EditorUtility.SetDirty(autoAttack);
            return root;
        }

        private static void BuildEnemies(Transform combatRoot, Transform playerRoot)
        {
            GameObject enemyPrefab = AssetDatabase.LoadAssetAtPath<GameObject>(EnemyPrefab);
            if (enemyPrefab == null)
            {
                throw new FileNotFoundException("Enemy prefab not found.", EnemyPrefab);
            }

            Vector3[] offsets =
            {
                new Vector3(6f, 0f, 5f),
                new Vector3(-7f, 0f, 7f),
                new Vector3(0f, 0f, 12f)
            };

            for (int index = 0; index < offsets.Length; index++)
            {
                GameObject enemy = new GameObject("Enemy_" + (index + 1));
                enemy.transform.SetParent(combatRoot, false);
                enemy.name = "Enemy_" + (index + 1);
                enemy.transform.position = playerRoot.position + offsets[index];
                enemy.transform.rotation = Quaternion.identity;

                GameObject enemyVisual = (GameObject)PrefabUtility.InstantiatePrefab(enemyPrefab, enemy.transform);
                enemyVisual.name = "Visual";
                enemyVisual.transform.localPosition = Vector3.zero;
                enemyVisual.transform.localRotation = Quaternion.Euler(-90f, 0f, 0f);
                enemyVisual.transform.localScale = Vector3.one;

                CharacterController controller = enemy.GetComponent<CharacterController>();
                if (controller == null)
                {
                    controller = enemy.AddComponent<CharacterController>();
                }
                controller.radius = 0.45f;
                controller.height = 2f;
                controller.center = Vector3.up;
                controller.stepOffset = 0.3f;

                Health health = enemy.GetComponent<Health>();
                if (health == null)
                {
                    health = enemy.AddComponent<Health>();
                }

                EnemyAnimation enemyAnimation = enemy.GetComponent<EnemyAnimation>();
                if (enemyAnimation == null)
                {
                    enemyAnimation = enemy.AddComponent<EnemyAnimation>();
                }

                EnemyBrain brain = enemy.GetComponent<EnemyBrain>();
                if (brain == null)
                {
                    brain = enemy.AddComponent<EnemyBrain>();
                }
                brain.ConfigurePath(new[] { playerRoot }, health);

                EditorUtility.SetDirty(health);
                EditorUtility.SetDirty(enemyAnimation);
                EditorUtility.SetDirty(brain);
            }
        }

        private static Canvas BuildJoystick(PlayerInputReader inputReader)
        {
            GameObject canvasObject = new GameObject("PlayerUI", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
            Canvas canvas = canvasObject.GetComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            CanvasScaler scaler = canvasObject.GetComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(1920f, 1080f);
            scaler.screenMatchMode = CanvasScaler.ScreenMatchMode.MatchWidthOrHeight;
            scaler.matchWidthOrHeight = 0.5f;

            GameObject backgroundObject = CreateImage("VirtualJoystick", canvasObject.transform, new Color(0f, 0f, 0f, 0.35f));
            RectTransform background = backgroundObject.GetComponent<RectTransform>();
            background.anchorMin = Vector2.zero;
            background.anchorMax = Vector2.zero;
            background.pivot = new Vector2(0.5f, 0.5f);
            background.sizeDelta = new Vector2(220f, 220f);
            background.anchoredPosition = new Vector2(150f, 150f);

            GameObject handleObject = CreateImage("Handle", background, new Color(1f, 1f, 1f, 0.75f));
            RectTransform handle = handleObject.GetComponent<RectTransform>();
            handle.anchorMin = new Vector2(0.5f, 0.5f);
            handle.anchorMax = new Vector2(0.5f, 0.5f);
            handle.pivot = new Vector2(0.5f, 0.5f);
            handle.sizeDelta = new Vector2(90f, 90f);
            handle.anchoredPosition = Vector2.zero;
            handleObject.GetComponent<Image>().raycastTarget = false;

            VirtualJoystick joystick = backgroundObject.AddComponent<VirtualJoystick>();
            joystick.Configure(background, handle);
            inputReader.SetVirtualJoystick(joystick);
            EditorUtility.SetDirty(inputReader);

            new GameObject("EventSystem", typeof(EventSystem), typeof(StandaloneInputModule));
            return canvas;
        }

        private static GameObject CreateImage(string name, Transform parent, Color color)
        {
            GameObject gameObject = new GameObject(name, typeof(RectTransform), typeof(CanvasRenderer), typeof(Image));
            gameObject.transform.SetParent(parent, false);
            Image image = gameObject.GetComponent<Image>();
            image.color = color;
            image.sprite = AssetDatabase.GetBuiltinExtraResource<Sprite>("UI/Skin/Knob.psd");
            image.type = Image.Type.Simple;
            return gameObject;
        }

        private static void ConfigureCamera(Camera mainCamera, Transform target)
        {
            if (mainCamera == null)
            {
                throw new MissingReferenceException("SampleScene has no Main Camera.");
            }

            mainCamera.transform.position = target.position + new Vector3(0f, 50f, -26.5f);
            mainCamera.transform.rotation = Quaternion.Euler(60f, 0f, 0f);
            CameraFollow follow = mainCamera.GetComponent<CameraFollow>();
            if (follow == null)
            {
                follow = mainCamera.gameObject.AddComponent<CameraFollow>();
            }
            follow.Configure(target, new Vector3(0f, 50f, -26.5f));
            EditorUtility.SetDirty(follow);
        }

        private static Camera FindMainCamera()
        {
            Camera camera = Camera.main;
            if (camera != null)
            {
                return camera;
            }

            Camera[] cameras = Object.FindObjectsOfType<Camera>(true);
            return cameras.Length > 0 ? cameras[0] : null;
        }

        private static void EnsureGround()
        {
            Collider[] colliders = Object.FindObjectsOfType<Collider>(true);
            bool hasUsableGround = false;
            foreach (Collider collider in colliders)
            {
                if (collider.enabled && !collider.isTrigger &&
                    collider.GetComponentInParent<CharacterController>() == null)
                {
                    hasUsableGround = true;
                    break;
                }
            }

            if (hasUsableGround)
            {
                return;
            }

            GameObject ground = new GameObject("GameGround");
            ground.transform.position = new Vector3(0f, -0.5f, 0f);
            BoxCollider colliderComponent = ground.AddComponent<BoxCollider>();
            colliderComponent.size = new Vector3(200f, 1f, 200f);
        }
    }
}
#endif
