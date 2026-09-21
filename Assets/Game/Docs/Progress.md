# 复刻进度

状态仅使用：未开始、开发中、待Unity验证、已完成、被阻塞。

| 阶段 | 状态 | 当前结果 | 下一验收点 |
| --- | --- | --- | --- |
| 阶段 0：项目审计与基础修复 | 已完成 | 文档审计、脚本恢复、Build Settings/Input Manager、场景引用、模型朝向和 WASD 移动已确认；Unity 编译及生成器幂等性通过 | 无 |
| 阶段 1：玩家核心 | 已完成 | 键盘、摇杆、移动、重力、动画优先级、相机跟随、摇杆死区、移动 FOV 反馈和横竖屏相机距离已完成 | 无 |
| 阶段 2：自动攻击与普通敌人 | 已完成 | 索敌、前摇、池化箭矢、伤害、追击、掉落、死亡和回收闭环通过自动测试 | 人工确认最终动画观感 |
| 阶段 3：敌人攻击、玩家血量与城堡 | 已完成 | 玩家 100 HP、家园 250 HP；敌人从道路入口持续生成并逐点行军，完全不以玩家为目标，到达终点直接伤害家园 | 人工确认道路点与地图道路贴合 |
| 阶段 4：金币与金矿 | 已完成 | 1.5 秒生产、金币旋转/吸附/拾取、100 上限、UI、静态对象池 | 人工确认金币可见性 |
| 阶段 5：区域投放与解锁 | 已完成 | 10→15→10 三阶段依赖；靠近自动逐枚投放、颜色进度、完成后解锁下一阶段 | 人工确认区域位置 |
| 阶段 6：友军与建筑战斗 | 已完成 | 弓箭手友军、骑兵/兵营展示、箭塔解锁并自动索敌攻击；使用已提取模型 | 人工确认模型比例和朝向 |
| 阶段 7：引导系统 | 已完成 | 3D 黄色指引、中文目标提示、完成后自动切换，不阻塞移动输入 | 人工确认指引画面 |
| 阶段 8：音频、特效与反馈 | 已完成 | 代码生成的 BGM/射击/金币/受击/结果提示音、受击闪白、解锁弹跳；项目无原始音频资源 | 有正式音频时可替换生成音 |
| 阶段 9：完整流程与结束条件 | 已完成 | 开局后道路敌人持续来袭；采集和解锁完成后进入最后防守倒计时，清除余敌胜利；家园失守失败 | 已通过道路防守自动测试 |
| 阶段 10：适配、性能与 WebGL | 被阻塞 | 安全区、CanvasScaler、横竖屏相机、输入、金币/箭矢池和无每帧场景 Find 已完成；一键 WebGL 构建工具已提供 | 当前 Unity 未安装 WebGL Build Support，安装模块后执行构建工具 |

## 阶段 0 审计记录

- 严重问题：提交 `7d76c55` 删除了 `Assets/Game/Scripts` 与 `GameplaySceneBuilder`，但场景继续引用对应 GUID，会形成 Missing Script；已从同项目临时 Unity 构建副本恢复匹配文件。
- Build Settings：`Gameplay.unity` 已启用且位于第一位。
- 输入：`activeInputHandler: 0`，使用旧版 Input Manager；Horizontal/Vertical 轴存在。
- 场景：静态检查为一个 PlayerRoot、一个 CombatRoot、一个 UI、一个 EventSystem、一个 GameGround、三个测试敌人。
- 资源保护：未修改 `KingshotOriginalScriptsReference~`、`ExtractedModels`、`ExtractedSkinnedModels`。
- 自动验证：Unity 2022.3.62f2 批处理连续执行生成器两次，退出码均为 0；每次均保持 1 个 PlayerRoot、CombatRoot、PlayerUI、EventSystem、GameGround 和 3 个敌人。
- 引用检查：Gameplay 中全部自定义脚本 GUID 已恢复；其余脚本 GUID 均来自项目已有的 Unity UI Package。
- 待验证：国王和敌人的视觉本地旋转、前方轴、碰撞胶囊尺寸、地面接触、攻击朝向与相机实际画面。

## 阶段 2 自动验证记录

- 问题复现：3 个敌人和 `PlayerAutoAttack` 均存在，但 4 秒后敌人总生命仍为 9。
- 根因：进入 Play Mode 时，`SubsystemRegistration` 清空注册表的时序可能晚于场景敌人的 `OnEnable`，导致首批敌人丢失。
- 修复：`EnemyBrain.Start` 进行幂等补注册；注册表使用 `HashSet`，不会产生重复目标。
- 修复后结果：4 秒内敌人总生命 9 → 6，死亡敌人 1，证明选敌、前摇、箭矢、命中、扣血和死亡闭环均已运行。

## 完整流程自动验证记录

- Unity 2022.3.62f2 批处理编译和场景生成成功，退出码 0。
- Play Mode 自动模拟加币、依次进入三个区域、投放、解锁和清敌。
- 最终输出：`zones=3 zonesDone=True enemies=0 result=Victory`。
- 日志未出现 C# 编译错误、NullReferenceException 或 MissingReferenceException。
- WebGL 构建工具已执行；失败原因仅为本机 Unity 缺少 WebGL 平台模块，日志为 `build target was unsupported`。

## 道路防守修正验证

- 原试玩确认：EnemyQueue 按 `startTime/gapTime/enemyCount/pathIndex` 生成；Enemy 沿路径点前进，走完路径后调用 Castle 伤害并回收，不追逐国王。
- Unity 修正：移除围绕玩家的三个固定敌人和敌人玩家仇恨，改为 `EnemyWaveSpawner + EnemyRoadPath + EnemyBrain` 路径队列。
- 22 秒自动测试：持续生成正常，玩家生命保持 `100`，家园生命由 `250` 降至 `205`，证明敌人只攻击家园。
