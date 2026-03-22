# 返老还酮｜用30天重启人生

这是《返老还酮》书籍网站仓库，当前已上线基础站点结构，并填充「序言」内容。

## 本地预览

仓库是纯静态页面，直接打开 `index.html` 即可预览；也可以用任意静态服务器启动：

```bash
npx serve .
```

## 目录结构

```text
.
├── index.html         # 页面结构
├── styles.css         # 页面样式
├── src/
│   ├── app.js         # 渲染逻辑
│   └── content.js     # 书籍内容数据（标题、章节、图片）
└── DEPLOY_CLOUDFLARE.md
```

## 内容更新方式

后续新增章节时，优先编辑 `src/content.js`。

- 书名、副标题：`book.title`、`book.subtitle`
- 序言标题：`book.preface.title`
- 段落正文：`book.preface.paragraphs` 数组
- 图片：`book.preface.images` 数组

如果你把新章节发给我，我会继续按同样结构帮你填进去并整理版式。
