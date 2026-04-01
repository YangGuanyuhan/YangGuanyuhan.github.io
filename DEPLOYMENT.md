# 🌐 部署指南

本指南会帮助你将个人简历网站部署到互联网上。

## 选项 1: GitHub Pages (推荐) ⭐

### 前提条件
- GitHub 账号
- 项目已推送到 GitHub

### 部署步骤

1. **本地测试（确保没有问题）**
   ```bash
   npm install
   npm run dev      # 本地测试
   npm run build    # 本地构建测试
   ```

2. **推送代码到 GitHub** (如果还没有)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YangGuanyuhan/YangGuanyuhan.github.io.git
   git push -u origin main
   ```

3. **配置 GitHub Pages**
   - 进入仓库首页
   - 点击 ⚙️ **Settings**（仓库设置）
   - 左侧菜单找到 **Pages**
   - **Source** 选择 **"GitHub Actions"**
   - 点击 **Save**

4. **GitHub Actions 自动部署**
   - GitHub Actions 会自动构建和部署
   - 流程完成后，访问 `https://YangGuanyuhan.github.io`
   - 如果出错，检查 **Actions** 标签页的错误日志

### 完整的本地测试流程 ✅

在推送之前，用这个命令完整测试：
```bash
# 进入项目目录
cd f:\文件夹\个人\YangGuanyuhan.github.io

# 1. 安装依赖
npm install

# 2. 本地开发（看效果）
npm run dev
# （在浏览器里检查，按 Ctrl+C 关闭）

# 3. 代码检查
npm run lint

# 4. 本地构建（这是 GitHub Actions 会运行的）
npm run build

# 5. 预览生产版本
npm run preview
# （再次检查网站，按 Ctrl+C 关闭）

# 6. 确认没问题后推送
git add .
git commit -m "feat: portfolio website ready for deployment"
git push
```

### 注意事项 ⚠️

- ✅ **必须**: 在 GitHub Pages 设置中选择 "GitHub Actions" 作为源
- ✅ **必须**: 本地先用 `npm run build` 测试，确保构建成功
- ✅ **必须**: 检查 GitHub Actions 日志是否有错误

### 故障排除

| 问题 | 解决方案 |
|------|---------|
| GitHub Pages 显示 404 | 检查 Settings > Pages 的源是否设置为 "GitHub Actions" |
| 构建失败 | 本地运行 `npm run build` 看错误详情 |
| CSS 不加载 | 检查浏览器控制台（F12）是否有网络错误 |
| 页面不更新 | 清除浏览器缓存（Ctrl+Shift+Del）或用无痕窗口 |

## 选项 2: Vercel

### 步骤

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 登录
3. 点击 "Import Project"
4. 选择你的仓库
5. 自动配置构建设置
6. 点击 "Deploy"

**优点**: 自动 HTTPS, 全球 CDN, 自动预览

## 选项 3: Netlify

### 步骤

1. 访问 [netlify.com](https://netlify.com)
2. 点击 "New site from Git"
3. 连接你的 GitHub 账号
4. 选择仓库
5. 构建设置保持默认
6. 点击 "Deploy site"

**优点**: 友好的 UI, 自动 SSL, 简单的部署

## 选项 4: 自托管 (VPS)

### 前置准备
- 购买 VPS (如阿里云、腾讯云)
- SSH 访问权限
- 域名 (可选)

### 部署步骤

1. **连接到服务器**
   ```bash
   ssh root@your_server_ip
   ```

2. **安装 Node.js 和 npm**
   ```bash
   curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **克隆项目**
   ```bash
   cd /var/www
   git clone https://github.com/YangGuanyuhan/YangGuanyuhan.github.io.git
   cd YangGuanyuhan.github.io
   ```

4. **安装和构建**
   ```bash
   npm install
   npm run build
   ```

5. **配置 Nginx**
   ```bash
   sudo apt-get install nginx
   ```
   
   编辑 `/etc/nginx/sites-available/default`:
   ```nginx
   server {
       listen 80;
       server_name your_domain.com;
       
       root /var/www/YangGuanyuhan.github.io/dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

6. **启动 Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

7. **自动更新** (可选)
   创建 `update.sh` 脚本:
   ```bash
   #!/bin/bash
   cd /var/www/YangGuanyuhan.github.io
   git pull origin main
   npm install
   npm run build
   sudo systemctl restart nginx
   ```

## 环境变量配置

如果需要使用环境变量，创建 `.env` 文件：

```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your_analytics_id
```

在代码中使用：
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 性能优化

### 构建优化
```bash
npm run build -- --mode=production
```

### CDN 配置
- 使用 Cloudflare 加速内容分发
- 启用 Gzip 压缩
- 启用浏览器缓存

### SEO 优化
- 检查 `index.html` 中的 meta 标签
- 确保网站地图 (sitemap.xml)
- 提交到搜索引擎

## 故障排除

### 问题 1: 部署后 CSS 不加载
**解决**: 检查 `base` 路径是否正确配置

### 问题 2: GitHub Pages 404 错误
**解决**: 确保 `dist` 文件夹不在 `.gitignore` 中（GitHub Pages 版本）

### 问题 3: 自定义域名不生效
**解决**: 检查 DNS 设置和 GitHub Pages 配置

## 监控和分析

### 添加 Google Analytics
1. 创建 Google Analytics 账号
2. 获取跟踪 ID
3. 在 `index.html` 中添加跟踪代码

### 生成网站地图
```bash
npm install sitemap-generator-cli --save-dev
```

## 备份和维护

- 定期备份代码到 GitHub
- 更新依赖 `npm update`
- 监控网站状态和性能

---

有任何问题？发送邮件到 yanggyh2023@mail.sustech.edu.cn 📧
