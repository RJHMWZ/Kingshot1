# Unity 复刻阅读顺序

## 阶段1：启动、输入、移动、相机

重点模块：`GameDirector`、`Player`、`JoyStick`、`JoyStickUI`、`JoystickCustom`、`ThreeFreeLookCamera`、`AutoAdapter`。

先提取：游戏启动事件、摇杆向量、移动停止事件、角色转向、相机横竖屏参数。

## 阶段2：主角自动攻击与敌人

重点模块：`Player`、`PlayerWeaponArrow`、`Enemy`、`EnemyController`、`EnemyQueue`、`Hp`、`CharacterBase`。

先画出：搜索目标 → 锁定目标 → 播放攻击 → 箭矢生成 → 命中扣血 → 死亡回收。

## 阶段3：友军、弓箭手和箭塔

重点模块：`Soldier`、`SoldierController`、`Archer`、`TowerWeapon`、`TowerWeaponArrow`、`TowerWeaponCtrl`。

区分普通士兵、骑兵、弓箭手和箭塔的生成条件、目标优先级及攻击方式。

## 阶段4：金币、金矿和资源堆叠

重点模块：`GoldMine`、`Coin`、`CoinBurst`、`CoinComp`、`GoodsStack`、`GoodsStack2`、`ItemCreate`。

提取生产计时、掉落数量、吸附拾取、携带上限、投放资源和资源消耗。

## 阶段5：区域、建筑和围栏解锁

重点模块：`Area`、`Area2`、`AreaController`、`Door`、`FenseCtrl`、`Castle`、`HouseExtra`。

提取区域需求数据、进入退出触发、资源填充、完成条件、开门和显示隐藏顺序。

## 阶段6：引导、UI、胜负与适配

重点模块：`GuideArrow`、`GuideStartPanel`、`ItemPanel`、`ResultPanel`、`AutoAdapter`、`FitScreenUtil`。

最后复刻引导箭头、提示文本、胜负面板、下载按钮，以及横竖屏画面适配。
