# 给 VSCode Codex 的通用提示词

```text
你正在协助我使用 Unity 2022.3 复刻一个 Cocos Creator HTML 试玩。

原试玩脚本参考目录：
Assets/KingshotOriginalScriptsReference~/

当前 Unity 实现目录：
Assets/Game/

工作规则：
1. 先阅读 README_使用说明.md 和 03_Documents/MODULE_INDEX.md。
2. 只读取当前功能相关的拆分模块；需要确认时再对照 00_Raw_All_Scripts/assets/main/index.js。
3. 原脚本是构建和混淆后的 JavaScript，只能作为行为、数值、事件顺序和节点关系参考。
4. 不要把 JavaScript 直接复制成 C#，要按 Unity 组件职责重新设计。
5. 不修改 Assets/ExtractedSkinnedModels 和 KingshotOriginalScriptsReference~。
6. 每次开始实现前，先输出：原试玩逻辑、当前Unity差异、计划新增/修改文件、验收条件。
7. 每个阶段只完成一个可运行闭环，完成后等待我测试。
8. 新代码统一放在 Assets/Game 下。
9. 保证 Unity Console 无编译错误，不添加无必要的第三方包。

本次功能目标：<在这里填写，例如“复刻主角自动射箭逻辑”>

请先分析，不要立即修改代码。
```
