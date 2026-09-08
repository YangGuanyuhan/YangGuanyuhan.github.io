# 杨官宇涵 · Portfolio

[访问网站](https://yangguanyuhan.github.io/) · [部署状态](https://github.com/YangGuanyuhan/YangGuanyuhan.github.io/actions/workflows/deploy.yml)

南方科技大学计算机科学与技术专业的个人作品集。包含实习经历、可核验的开源成果、项目、教育背景与生活影像。使用黑白灰、磨砂玻璃与柔和光影，支持桌面、平板和手机。

## 本地开发

使用 Node.js 24（版本记录在 `.nvmrc`）。

```sh
npm ci
npm run dev
```

打开 http://127.0.0.1:3000。生产预览：

```sh
npm run lint
npm run build
npm run preview
```

## 仓库结构

```text
src/
  components/
    layout/           页面容器与章节标题
    navigation/       桌面与移动导航
    sections/         首页、经历、项目、教育、技能、影像、联系
    ui/               按钮与标签
    Footer/           页脚
  data/               个人资料、项目、教育、技能、导航
  hooks/              当前章节检测
  styles/tokens.css   统一颜色、字体和布局变量
  index.css           组件样式与响应式规则
public/               直接发布的图标、WebP 照片、SEO 文件
assets/originals/     历史原图归档（在仓库中，不进入网站构建）
images/              本地新增照片收件夹（Git 忽略，不公开原图）
scripts/              可复现的照片压缩脚本
docs/                 部署、维护说明和 GitHub 简介模板
.github/workflows/    网站发布与贡献蛇动画
```

## 编辑内容

- 个人信息与照片：`src/data/profile.ts`
- 项目描述、成果与细节：`src/data/projects.ts`
- 实习经历：`src/components/sections/Experience/Experience.tsx`
- 教育与课程：`src/data/education.ts`
- 技术与语言能力：`src/data/skills.ts`
- 颜色和版心：`src/styles/tokens.css`
- 布局与响应式：`src/index.css`

新增原图保留在本地 `images/`，在 `scripts/optimize-images.mjs` 中登记，再运行 `npm run images` 生成 480px 和 960px 的 WebP 网页副本。原图不会修改，发布副本不保留 EXIF 等元数据。新克隆仓库不包含本地原图，可直接使用已提交的 WebP 构建；只有重新生成照片时才需要补齐原图。

## 部署与维护

推送至 `main` 后，GitHub Actions 依次执行锁定依赖安装、ESLint、TypeScript 检查、Vite 构建、GitHub Pages 部署。拉取请求仅构建检查，不发布。

- [部署与故障排查](docs/deployment.md)
- [维护与视觉验收](docs/maintenance.md)
- [公开内容与隐私边界](docs/public-content.md)
- [GitHub 个人简介模板](docs/profile-readme.md)

网站与 Snake Animation 是独立工作流。动画只更新 `output` 分支的 SVG，不参与网站构建。

## 技术选择

React 18、TypeScript、Vite 7、Lucide 图标、原生 CSS。字体随网站部署，无第三方字体请求。动画遵循系统“减少动态效果”设置；导航、项目详情和联系按钮可使用键盘操作。
