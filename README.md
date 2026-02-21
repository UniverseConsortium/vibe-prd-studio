# Vibe PRD Studio（简体中文）

把脑海中的模糊想法，快速整理成可执行的专业需求文档（PRD）。

## 项目定位

面向 Vibe Coding 小白：
- 不需要先会写完整 PRD
- 先输入想法、用户、场景、功能点
- 系统自动生成结构化 PRD 草案（Markdown）

## 技术栈

- Next.js 16（App Router）
- TypeScript
- ESLint

## 当前功能

1. 结构化输入表单
   - 项目想法
   - 目标用户
   - 使用场景
   - 核心功能（逐行）
   - 约束条件
   - 时间预期

2. 实时 PRD 预览
   - 自动生成标准 PRD 章节
   - 输出为 Markdown 风格内容

3. 一键复制
   - 点击按钮复制完整 PRD 文本
   - 可直接粘贴到文档、飞书、Notion、GitHub

## 本地启动

```bash
npm install
npm run dev
```

默认访问：

```text
http://localhost:3000
```

## 构建

```bash
npm run build
npm run start
```

## 建议的下一步

- 导出 `.md` / `.pdf`
- 增加模板（Web3 / 电商 / SaaS / AI Agent）
- 历史版本与协作
- 需求评审清单（自动补齐验收标准）

## 目录说明（简）

```text
src/app/page.tsx          页面与交互逻辑
src/app/page.module.css   样式
```

## 许可

内部开发用途（可按团队需要补充 LICENSE）。
