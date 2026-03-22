# Cloudflare Pages 部署指南

本项目是纯静态站点，最适合部署到 Cloudflare Pages。

## 方式一：连接 GitHub 自动部署（推荐）

1. 进入 Cloudflare Dashboard。
2. 打开 `Workers & Pages` -> `Create` -> `Pages` -> `Connect to Git`。
3. 连接 GitHub 账号，选择仓库：`lovexw/flht-book`。
4. 设置构建参数：
   - Framework preset: `None`
   - Build command: 留空
   - Build output directory: `.`
5. 点击 `Save and Deploy`。
6. 首次部署完成后，会得到 `*.pages.dev` 预览域名。

后续每次 push 到默认分支，Cloudflare 会自动重新部署。

## 方式二：本地命令行手动发布

适合你临时预览某个版本，不依赖 GitHub 自动构建。

1. 安装并登录 Wrangler：

```bash
npm install -g wrangler
wrangler login
```

2. 在仓库根目录执行部署：

```bash
wrangler pages deploy . --project-name flht-book
```

## 自定义域名（可选）

1. 在 Cloudflare Pages 项目中进入 `Custom domains`。
2. 添加你的域名（例如 `book.yourdomain.com`）。
3. 按提示完成 DNS 绑定（若域名托管在 Cloudflare，通常可自动完成）。

## 发布前检查清单

- 页面标题、副标题和正文是否为最新版本。
- 图片链接是否可访问。
- 手机端排版是否正常（建议用浏览器开发者工具检查）。
- 仓库默认分支是否为你期望触发部署的分支。
