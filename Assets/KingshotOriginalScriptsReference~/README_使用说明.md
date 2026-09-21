# Kingshot 原试玩脚本 Codex 参考包

这个文件夹用于让 VSCode Codex 阅读原试玩的 Cocos Creator JavaScript 逻辑，再逐步翻译为 Unity C#。

## 放进 Unity 的方法

1. 解压压缩包。
2. 把完整的 `KingshotOriginalScriptsReference~` 文件夹复制到 Unity 项目的 `Assets` 下。
3. 最终路径应类似：`Assets/KingshotOriginalScriptsReference~/README_使用说明.md`。
4. **不要删除文件夹名称末尾的 `~`**。Unity 会忽略这个参考目录，不会把里面的 JavaScript 当成游戏资源导入，但 VSCode/Codex 仍然可以读取。
5. 这些脚本是 Cocos Creator 构建后的 JavaScript，不能直接在 Unity 中运行，必须按功能翻译成 C#。

## 文件内容

- `00_Raw_All_Scripts`：原试玩中发现的全部 16 个 JavaScript 文件，原样保留。
- `01_Gameplay_Modules_Deobfuscated`：从主包拆出的 106 个模块，字符串已尽量解混淆并做基础格式化。
- `02_Config_And_Settings`：5 个资源包配置与启动设置。
- `03_Documents`：模块索引、复刻顺序和 Codex 提示词。
- `main_bundle_deobfuscated.reference.js`：完整主逻辑包的字符串解混淆版本。

本次共替换 9020 个混淆字符串调用。变量名仍然是构建后的短名称，这是没有源码和 source map 时无法完全恢复的部分；逻辑分支、方法调用、数值与模块关系均保留。

## 最推荐的使用方式

每次只让 Codex 阅读当前功能对应的模块，不要一次要求翻译全部脚本。例如：

```text
请先阅读 Assets/KingshotOriginalScriptsReference~/03_Documents/MODULE_INDEX.md，
然后重点阅读 Player、PlayerWeaponArrow、Enemy、EnemyController 模块。
结合我当前 Assets/Game 下的 Unity C# 代码，分析原试玩该功能的完整执行顺序。
先输出差异和实施计划，不要直接修改代码；我确认后再实现。
```

## 注意

- `00_Raw_All_Scripts/cocos-js` 是 Cocos 引擎运行时代码，通常不需要翻译。
- 主要玩法集中在 `assets/main/index.js` 拆出的模块中。
- 原试玩资源配置中的 UUID、节点名和音频名可以作为 Unity 资源绑定依据。
- 不要让 Codex 逐行照搬 JavaScript；应先归纳状态机、事件、数据和时序，再用 Unity 组件重新实现。
