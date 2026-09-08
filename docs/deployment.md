# GitHub Pages 部署

线上地址：https://yangguanyuhan.github.io/

仓库 Settings → Pages → Source 必须选择 **GitHub Actions**。本仓库为用户站点，Vite 的 base 为根路径 `/`。

## 发布

1. 本地运行 `npm ci`、`npm run lint`、`npm run build`。
2. 使用 `npm run preview` 检查生产构建，包括桌面、手机与关键交互。
3. 提交并推送 `main`，或在 Actions 手动运行 Deploy to GitHub Pages。
4. 确认工作流中 build 和 deploy 均成功，并打开线上地址验证资源与布局。

只发布 `dist/`。原图、文档、本地浏览器截图和依赖目录不会进入网站产物。

## 贡献蛇动画

`snake.yml` 每天定时运行，也可手动触发。生成浅色与深色 SVG，提交至已有的 `output` 分支。这是 GitHub 简介用的贡献图动画，不是网站发布任务。

2026-08-28 的失败日志显示 SVG 已生成，推送远程分支时返回 HTTP 403。随后每日任务曾恢复成功。新版显式声明 `contents: write`，使用 checkout 配置的认证正常推送，并对瞬时推送故障重试三次；不会强制覆盖分支历史。

如果持续 403，检查仓库的 Actions 权限及 `output` 分支规则。不要把个人访问令牌写入源码。

## 常见问题

- **构建失败**：使用 Node.js 24 和已提交的 package-lock.json；先在本地复现 `npm ci && npm run build`。
- **页面仍是旧版**：确认当前提交对应的 deploy 已成功；再检查线上 HTML 中的带哈希资源名是否与本地 dist 一致。
- **图片不显示**：确认 `public/images/` 中的 WebP 文件已提交，大小写与 profile.ts 完全一致。
- **动画失败但网站正常**：检查 snake.yml 的独立日志，不需要回滚网站。

参考：[Vite 部署文档](https://vite.dev/guide/static-deploy.html#github-pages)、[Platane/snk](https://github.com/Platane/snk)。
