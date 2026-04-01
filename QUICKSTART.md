# 🚀 快速启动指南

## 第一步：安装依赖

在项目目录中打开终端，运行：

```bash
npm install
```

如果你使用的是 yarn：
```bash
yarn install
```

## 第二步：启动开发服务器

```bash
npm run dev
```

浏览器将自动打开 http://localhost:3000

## 第三步：自定义内容

编辑 `src/components/` 中的文件来更新你的个人信息：

### 修改基本信息
**文件**: `src/components/Hero.tsx`
- 修改名字
- 更新职位描述
- 更改联系方式

### 更新教育背景
**文件**: `src/components/About.tsx`
- 学校、专业、学位
- 核心课程列表
- 职业意向

### 更新技能
**文件**: `src/components/Skills.tsx`
- 编程语言
- 框架与库
- 工具环境
- 语言能力

### 更新项目
**文件**: `src/components/Projects.tsx`
- 项目名称和描述
- 项目特点（高亮部分）
- 技术标签

## 第四步：构建生产版本

当你准备好发布时，运行：

```bash
npm run build
```

生成的文件将在 `dist/` 文件夹中。

## 部署到 GitHub Pages

1. 修改 `vite.config.ts` 中的 base 路径（如果需要）
2. 推送代码到 GitHub
3. 在 GitHub 仓库设置中启用 Pages
4. 选择部署源为 `build` 分支

## 常见问题

### Q: 如何添加新的技能？
**A**: 编辑 `src/components/Skills.tsx`，在相应的数组中添加新项。

### Q: 如何修改网站颜色？
**A**: 编辑 `src/index.css` 中的 CSS 变量（`:root` 部分）。

### Q: 如何添加新的项目？
**A**: 编辑 `src/components/Projects.tsx`，在 `projects` 数组中添加新的项目对象。

### Q: 如何在移动设备上查看？
**A**: 在开发时，访问 `http://你的IP:3000`

## 📱 预览

访问 [GitHub](https://github.com/YangGuanyuhan) 查看最终效果！

有任何问题？发送邮件到 yanggyh2023@mail.sustech.edu.cn 📧
