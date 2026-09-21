# Unity 手动验证与设置

编辑器工具能够可靠完成的引用均应自动生成；本文件仅保留必须由人工观察画面或交互确认的项目。

## 阶段 0 必须验证

1. 若 Unity 提示 `Gameplay.unity` 已在外部修改，选择从磁盘重新加载。
2. 打开 `Assets/Game/Scenes/Gameplay.unity`，确认 Hierarchy 中只有一个 PlayerRoot、CombatRoot、PlayerUI、EventSystem 和 GameGround。
3. 进入 Play Mode，确认 Console 没有 Missing Script、Missing Reference 或持续异常。
4. 检查国王与普通敌人是否直立，移动时面朝运动方向，攻击时面朝目标。
5. 如果模型直立但前后相反，请记录是国王、敌人还是两者都相反；不要旋转 PlayerRoot 或 Enemy 根节点，应只调整其 Visual 子物体的本地 Y 轴。
6. 在 Scene View 打开 CharacterController 轮廓，确认胶囊包住角色且底部接触地面，没有悬空、下陷或横倒。
7. 测试 WASD、方向键和摇杆；确认斜向速度不增加，松开恢复 idle，相机平滑跟随。
8. 走入敌人九米范围，确认国王播放 atk、箭矢飞向胸口、敌人追击并在三次命中后播放 die、约两秒后消失。
9. 分别切换 16:9 和 9:16 Game View，确认摇杆仍位于左下角且可操作。

## 当前无需手动绑定

- PlayerRoot 的输入、移动、动画、自动攻击和相机引用由 `GameplaySceneBuilder` 自动绑定。
- ArrowSpawnPoint、Projectiles 父节点、三个敌人的玩家目标由生成器自动绑定。
- Animator 自动从 Visual 子层级获取，Root Motion 自动关闭。
- 完整玩法由 CombatRoot 上的 CompleteGameplayBootstrap 自动接线；玩家/城堡生命、钱包、金矿、建造区域、友军、箭塔、引导、HUD、音频和结果面板无需手动绑定。

## 完整流程人工验收

1. 从 `Gameplay.unity` 进入 Play，靠近金矿生成的金币，确认金币自动吸附且顶部金币数字增加。
2. 沿黄色 3D 指引依次进入三个圆形建造区；需求依次为 10、15、10，金币应逐枚扣除，区域由橙色渐变为绿色。
3. 确认三个阶段依次出现友军弓箭手、箭塔以及骑兵/兵营展示；友军和箭塔应自动攻击敌人。
4. 让敌人接近玩家或城堡，确认顶部生命减少；任一关键目标死亡时出现“失败”和重开按钮。
5. 完成全部区域并清除敌人后确认出现“胜利”；点击“重新开始”应恢复完整初始状态。
6. 分别使用 16:9、9:16 和超宽比例，确认摇杆、顶部 HUD、引导文本和结果面板均位于安全区域。
7. 模型朝向、比例和区域位置仍属于视觉验收项，可调整生成器中的局部坐标，不要修改原始模型资源。
8. 在 Scene 运行时展开 `CombatRoot/EnemyRoadPath`，检查五个 Waypoint 是否落在当前地图道路中央；若地图美术位置不同，只移动 Waypoint，不要改变敌人目标或重新指向玩家。

## WebGL 唯一外部步骤

当前 Unity 安装缺少 WebGL Build Support。请在 Unity Hub 为 `2022.3.62f2` 安装 WebGL Build Support；随后执行 `Kingshot` 菜单对应构建方法或批处理调用 `Kingshot.Editor.WebGLBuildTool.BuildAndExit`。项目代码与场景已经按旧版 Input Manager 和 WebGL 兼容方式实现。

## 阶段 1 验证

1. 在 16:9 下分别测试 WASD、方向键和左下角摇杆，确认三种输入都能移动。
2. 摇杆中心小范围触摸不应产生漂移；拖出死区后移动，松手立即归零。
3. 移动时相机应轻微收窄视野，停止后平滑恢复，且不跟随玩家旋转。
4. 切换到 9:16，确认相机自动增大到横屏 `1.25` 倍距离，玩家和周边目标仍在合理视野内。
5. 检查 idle、move、atk、die 优先级，攻击期间不能被 move/idle 立即覆盖。

## 阶段 2 验证

1. 进入敌人 9 米范围，确认国王选择最近的存活敌人并播放 atk。
2. 前摇期间让目标离开范围或被其他伤害杀死，确认本次攻击取消且不会生成无效箭矢。
3. 箭矢应从 ArrowSpawnPoint 飞向目标胸口；目标失效或三秒超时后箭矢应回到 Projectiles 节点下并停用。
4. 连续攻击时 Hierarchy 中 Arrow 总数应稳定复用，不应每次攻击持续增长。
5. 普通敌人三次受击后立即停止追击、关闭碰撞、播放 die，并在约两秒后停用。
6. 手动重新启用一个已死亡的 Enemy 根节点，确认生命恢复为 3、碰撞恢复、重新注册并继续追击。

## 视觉确认后的记录方式

将确认结果补充到本文件，并把 `Progress.md` 中阶段 0、阶段 1、阶段 2 的状态从“待Unity验证”更新为“已完成”或记录具体阻塞原因。
