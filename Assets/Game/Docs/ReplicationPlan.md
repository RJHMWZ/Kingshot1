# 完整复刻计划

所有新增运行时代码、编辑器工具、配置、场景和预制体统一放在 `Assets/Game/`。每个阶段先分析对应原试玩模块，再完成一个可运行闭环。

## 阶段 0：项目审计与基础修复

- 原模块：Player、JoyStick 系列、ThreeFreeLookCamera、AutoAdapter、CharacterBaseObj3D、GameDirector。
- Unity 工作：恢复丢失脚本，核对玩家资源、Animator、CharacterController、地面碰撞、输入、相机、Build Settings 和生成器幂等性。
- 场景工作：保证唯一 PlayerRoot/CombatRoot/UI/EventSystem/GameGround，保留环境。
- 验收：Unity 编译通过；生成器连续执行两次对象数量不增加；Play Mode 中模型朝向和碰撞正常。
- 依赖：现有 Gameplay 场景、国王和普通敌人资源。

## 阶段 1：玩家核心

- 原模块：Player、JoyStick、JoyStickUI、JoystickCustom、ThreeFreeLookCamera、AutoAdapter。
- Unity 脚本：PlayerInputReader、VirtualJoystick、PlayerMovement、PlayerAnimation、CameraFollow、屏幕适配组件。
- 验收：键盘/摇杆移动、转向、四种动画优先级、相机与横竖屏正常。
- 依赖：阶段 0 视觉和碰撞确认。

## 阶段 2：自动攻击与普通敌人

- 原模块：Player、PlayerWeaponArrow、Arrow、Enemy、EnemyController、EnemyQueue、Hp。
- Unity 脚本：Health、EnemyRegistry、PlayerAutoAttack、ArrowProjectile、EnemyBrain、EnemyAnimation；补充对象池。
- 验收：索敌、前摇、箭矢、伤害、追击、死亡和回收闭环。
- 依赖：阶段 1 状态控制。

## 阶段 3：敌人攻击、玩家血量与城堡

- 原模块：Enemy、EnemyController、Castle、Hp、GameDirector、ResultPanel。
- Unity 脚本：EnemyAttack、PlayerHealthView、CastleHealth、DefeatCondition、ResultPanel。
- 验收：敌人选择玩家或城堡，玩家/城堡受伤死亡，失败面板正确出现。
- 依赖：阶段 2 敌人状态机。

## 阶段 4：金币与金矿

- 原模块：GoldMine、Coin、CoinBurst、CoinComp、GoodsStack、GoodsStack2、ItemCreate。
- Unity 脚本：GoldMineProducer、CoinPickup、CoinPool、PlayerWallet、CarryStackView、CoinUI。
- 验收：生产、掉落、旋转/跳跃、吸附、拾取、上限、UI 和回收闭环。
- 依赖：通用对象池与玩家触发范围。

## 阶段 5：区域投放与解锁

- 原模块：Area、Area2、AreaController、AreaType、Door、FenseCtrl、HouseExtra。
- Unity 脚本：UnlockArea、AreaRegistry、UnlockGraph、ResourceDeposit、DoorController、FenceController。
- 验收：按原依赖顺序投币、填充、完成、显隐建筑/道路并解锁下一目标。
- 依赖：阶段 4 钱包和金币表现。

## 阶段 6：友军与建筑战斗

- 原模块：Soldier、SoldierController、Archer、TowerWeapon 系列、MountMgr。
- Unity 脚本：AllyBrain、AllyRegistry、AllySpawner、Formation、TowerWeapon、TowerProjectile。
- 验收：各兵种按条件出现、编队、索敌、攻击和回收；箭塔自动射击。
- 依赖：阶段 5 建筑解锁，阶段 2 战斗接口和对象池。

## 阶段 7：引导系统

- 原模块：GuideArrow、GuideArrowConst、GuideStartPanel、ItemPanel、UserAction。
- Unity 脚本：TutorialDirector、TutorialStep、GuideArrowView、GuidePromptView、IdleGuideReminder。
- 验收：从开场到最终目标完整引导，不阻塞输入，不重复已完成步骤。
- 依赖：阶段 4–6 的真实目标事件。

## 阶段 8：音频、特效与视觉反馈

- 原模块：AudioMgr、AudioName、CCEffectMgr、AutoParticle、Shadow、AnimationConst。
- Unity 脚本：AudioService、EffectPool、HitFlash、CharacterShadow、BuildEffect。
- 验收：关键音乐/音效、受击、金币、建造、升级和阴影表现完整且复用对象。
- 依赖：所有玩法事件接口。

## 阶段 9：完整流程与结束条件

- 原模块：GameDirector、GameData、GameConfig、ResultPanel、PlayableChannel。
- Unity 脚本：GameFlow、WinCondition、DefeatCondition、ResultPanel、RestartFlow。
- 验收：开始、教程、解锁、波次、最终目标、胜负、重开形成完整可玩流程。
- 依赖：阶段 1–8。

## 阶段 10：适配、性能与 WebGL

- 原模块：AutoAdapter、FitScreenUtil、EasyPool。
- Unity 工作：安全区、16:9/9:16/超宽屏、相机视野、WebGL 输入和构建、对象池与 GC/查找审计。
- 验收：目标比例均正常，WebGL 构建成功，Console 无错误，性能热点无每帧场景搜索和频繁分配。
- 依赖：完整流程稳定。

