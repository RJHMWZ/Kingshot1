# 原试玩功能映射

本文档记录 `Assets/KingshotOriginalScriptsReference~/` 中的原试玩逻辑与 Unity 复刻系统的对应关系。参考脚本仅用于确认行为、时序、数据和资源关系，不参与 Unity 编译。

## 总体调用关系

`GameDirector` 在加载时建立全局对象引用，在开始时解锁第一个区域；首次用户输入启动背景音乐。`Player` 同时连接输入、移动、动画、自动战斗、金币拾取、区域投放和引导。`EnemyController`、`SoldierController`、`AreaController`、`GoldMine`、`Castle` 等系统分别维护自己的对象集合和状态，最终由 `GameDirector` 与 `ResultPanel` 完成胜负闭环。

Unity 侧将原试玩中职责过多的组件拆分为输入、运动、动画、生命、战斗、经济、区域、引导、流程和 UI 组件，通过事件传递关键状态。

## 模块映射

| 原试玩模块 | 原试玩职责 | Unity 对应系统 | 主要资源 | 当前状态 |
| --- | --- | --- | --- | --- |
| GameDirector、GameData、GameConfig | 初始化共享引用、首次输入开局、解锁首区、流程调度、数值 | CompleteGameplayBootstrap、GameSession | Gameplay 场景 | 已实现完整闭环 |
| Player | 移动、角色转向、动画、索敌、射箭、金币、区域投放、引导 | PlayerInputReader、PlayerMovement、PlayerAnimation、PlayerAutoAttack，后续拆分经济与引导 | character_king、idle/move/atk/die | 已有基础实现，待视觉验证 |
| JoyStick、JoyStickUI、JoystickCustom | 触摸开始/移动/结束、角度与半径计算、摇杆显示 | VirtualJoystick、EventSystem、CanvasScaler | Unity UI 占位图形 | 已有基础实现 |
| ThreeFreeLookCamera | 平滑跟随、屏幕方向偏移、移动时 FOV 变化 | CameraFollow，后续加入横竖屏参数和 FOV 状态 | Main Camera | 部分实现 |
| AutoAdapter、FitScreenUtil | 安全区、横竖屏与平台适配 | CanvasScaler、SafeAreaFitter、CameraFollow | GameplayUI | 已实现 |
| CharacterBaseObj3D、Hp | hp、hpPre、hpMax、死亡入口 | Health | 角色模型 | 已有通用生命组件 |
| Enemy、EnemyController | 敌人状态、有效性、距离检索、攻击、死亡与回收 | EnemyBrain、EnemyAnimation、EnemyRegistry | enemy_soldier、enemy_soldier_elite | 普通敌人基础闭环已实现 |
| EnemyQueue | 敌人生成队列和波次 | EnemyRegistry、场景测试敌人回收 | 普通敌人 | 当前试玩采用固定防守波次 |
| PlayerWeaponArrow、Arrow | 箭矢生成、目标跟踪、命中和回收 | ArrowProjectile、后续 ProjectilePool | 箭矢占位体/正式资源待确认 | 基础实现，尚未对象池化 |
| Soldier、SoldierController、Archer | 友军生成、编队、索敌与攻击 | AllyBrain、AllyRegistry、AllySpawner | soldier、cavalry、archer 等 | 未开始 |
| TowerWeapon 系列 | 箭塔索敌、攻击、箭矢 | TowerWeapon、TowerProjectile | 箭塔模型 | 未开始 |
| GoldMine | 生产计时和金币流程 | GoldMineProducer | 金矿与工人模型 | 已实现 |
| Coin、CoinBurst、CoinComp | 金币掉落、跳跃、旋转、吸附、拾取和回收 | CoinPickup、PlayerWallet | 代码占位金币 | 已实现并池化 |
| GoodsStack、GoodsStack2、ItemCreate | 携带堆叠、消耗和表现 | PlayerInventory、ResourceStackView | 金币堆叠视觉 | 未开始 |
| Area、Area2、AreaController | 进入退出、需求、投放、完成和依赖解锁 | PurchaseZone、CompleteGameplayBootstrap | 三个顺序区域 | 已实现 |
| Door、FenseCtrl、HouseExtra | 门、围栏、道路和建筑显隐 | Unlockable、DoorController、FenceController | 房屋、道路、围栏、门 | 未开始 |
| Castle | 城堡血量、受击与失败条件 | CastleObjective、Health、GameSession | 城堡占位体 | 已实现 |
| GuideArrow、GuideStartPanel、ItemPanel、UserAction | 引导目标、箭头、提示、操作状态 | GuidePointer、GameplayHUD | 3D 箭头和中文文本 | 已实现 |
| AudioMgr、AudioName | 音乐及音效名称和播放 | GameplayAudio | 运行时生成提示音 | 已实现；原音频资源缺失 |
| CCEffectMgr、AutoParticle、Shadow | 特效、闪白、粒子、阴影和复用 | DamageFlash、UnlockPulse | 运行时材质反馈 | 已实现基础反馈 |
| ResultPanel、playable_controller | 胜负面板和试玩出口 | GameSession、GameplayHUD | 运行时 UI | 已实现胜负与重开 |

## 已确认行为与数值

- 原 `Player` 在首次用户触摸后才进入游戏态；`GameDirector` 同时在首次触摸后启动循环 BGM。
- 原摇杆在触摸移动时逐步将速度插值到最大速度，松开后按 `move_stop_time` 衰减方向；当前 Unity 版本采用即时输入，后续按原配置校准。
- 原玩家索敌按固定调度频率执行，不在每帧扫描场景；攻击时锁定有效目标、转向、播放攻击动画，并由动画射击事件生成箭矢。
- 原箭矢发射后设置攻击冷却，射击完成后恢复索敌。
- 原箭矢在飞行中持续校验敌人是否已回收；命中、目标失效或飞行结束后统一放回 EasyPool，而不是销毁。
- 原普通敌人生成、箭矢和死亡对象均通过 EasyPool 复用；当前 Unity 已完成箭矢池和普通敌人停用回收基础。
- 原相机移动开始/停止时将 FOV 在约 `33` 与 `35` 之间用 `0.2` 秒切换。
- 原相机横屏正交尺寸为 `20`，竖屏为 `25`，竖屏视野尺度为横屏的 `1.25` 倍。
- 当前 Unity 玩家速度 `4.5`、转向 `720°/秒`、相机偏移 `(0, 50, -26.5)`。
- 当前 Unity 自动攻击范围 `9`、间隔 `0.8` 秒、前摇 `0.25` 秒、伤害 `1`、箭速 `18`。
- 当前 Unity 普通敌人生命 `3`、检测范围 `14`、速度 `2.3`、停止距离 `1.5`、转向 `540°/秒`。
- 动画优先级统一为 `Dead > Attack > Move > Idle`，通过现有状态名 CrossFade，不新增 Animator 参数。

## 已确认资源

- 玩家：`Assets/ExtractedSkinnedModels/Generated/character_king/character_king.prefab`。
- 普通敌人：`Assets/ExtractedSkinnedModels/Generated/enemy_soldier/enemy_soldier.prefab`。
- 玩家 Animator 状态：`idle`、`move`、`atk`、`die`。
- 普通敌人 Animator 状态：`idle`、`move`、`die`。
- 地图、房屋、金矿、围栏和现有环境保留在 `Gameplay.unity`。

## 尚未确认

- 国王与敌人视觉模型的最终本地旋转、前方轴和碰撞体包围范围，必须在 Unity Game View 中确认。
- 原 `GameConfig` 中全部玩法数值与当前 Unity 世界单位的换算关系。
- 城堡在当前场景中的准确节点、受击点和初始血量。
- 金币正式模型、音频、特效和 UI 图集的最终对应关系。
- 区域依赖图、每个区域需求量、建筑显示顺序和最终胜利条件。
- 原动画射击事件的准确帧；当前 Unity 使用时间前摇，后续应改为动画事件或集中动画配置。
