# Git Chrome 插件

一个使用现代Web技术构建的强大Chrome扩展，旨在增强您的Git工作流程和生产力。

## 🚀 特性

- **Git集成**：直接从浏览器中无缝地与Git仓库交互
- **智能通知**：获取仓库活动的实时更新
- **代码审查工具**：通过直观的UI简化代码审查过程
- **性能优化**：以效率为设计理念，提供流畅的用户体验
- **可定制**：根据您的特定工作流程需求定制扩展

## 📋 目录

- [安装](#安装)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [配置](#配置)
- [开发](#开发)
- [构建与部署](#构建与部署)
- [贡献](#贡献)
- [许可证](#许可证)

## 🛠️ 安装

### 前提条件

- Node.js (v16.0.0 或更高版本)
- pnpm (v7.0.0 或更高版本)
- Chrome浏览器 (v90.0 或更高版本)

### 步骤

1. 克隆仓库

```bash
git clone https://github.com/your-username/git-chrome-plugin.git
cd git-chrome-plugin
```

2. 安装依赖

```bash
pnpm install
```

## 🚦 快速开始

### 开发模式

启动开发服务器：

```bash
pnpm dev
```

这将在 `http://localhost:3000` 启动开发服务器，并监视文件更改。

### 在Chrome中加载扩展

1. 打开Chrome并导航至 `chrome://extensions`
2. 启用「开发者模式」(右上角的开关)
3. 点击「加载已解压的扩展程序」并选择 `dist` 目录
4. 扩展现在应该出现在您的Chrome工具栏中

## 📁 项目结构

```
chrome-plugin-dev/
├── .gitignore           # Git忽略文件
├── .vscode/             # VS Code配置
├── README.md            # 项目文档
├── dist/                # 构建输出目录
├── package.json         # 项目依赖和脚本
├── pnpm-lock.yaml       # pnpm锁定文件
├── postcss.config.mjs   # PostCSS配置
├── public/              # 静态资源
├── rsbuild.config.ts    # Rsbuild配置
├── src/                 # 源代码
│   ├── contentScripts/  # 内容脚本(注入到网页中)
│   ├── popup/           # 弹出UI
│   └── serviceWorker/   # 后台服务工作器
├── tailwind.config.ts   # Tailwind CSS配置
└── tsconfig.json        # TypeScript配置
```

## ⚙️ 配置

### Rsbuild配置

项目使用Rsbuild进行打包。`rsbuild.config.ts`中的关键配置：

- **入口点**：为popup、contentScripts和serviceWorker配置
- **输出**：为特定块自定义不带哈希的文件名
- **插件**：包含React插件以支持JSX
- **目标**：服务工作器为Node环境构建

### 环境变量

在根目录创建 `.env` 文件来设置环境变量：

```
API_URL=https://api.example.com
DEBUG=false
```

## 👨‍💻 开发

### 代码风格

- 使用ESLint和Prettier进行代码 linting 和格式化
- 遵循现有的代码风格和约定
- 编写有意义的提交消息

### 测试

```bash
pnpm test
```

## 🏗️ 构建与部署

### 生产构建

为生产环境构建扩展：

```bash
pnpm build
```

这将在 `dist` 目录中生成优化的文件。

### 预览生产构建

在本地预览生产构建：

```bash
pnpm preview
```

### 打包Chrome网上应用店

1. 创建 `dist` 目录的zip文件
2. 遵循[Chrome网上应用店发布指南](https://developer.chrome.com/docs/webstore/publish/)

## 🤝 贡献

欢迎贡献！请遵循以下步骤：

1. Fork仓库
2. 创建新分支 (`git checkout -b feature/amazing-feature`)
3. 进行更改
4. 提交更改 (`git commit -m 'Add some amazing feature'`)
5. 推送到分支 (`git push origin feature/amazing-feature`)
6. 打开Pull Request

请阅读[CONTRIBUTING.md](CONTRIBUTING.md)了解更多详情。

## 📄 许可证

本项目采用MIT许可证 - 详见[LICENSE](LICENSE)文件。

## 🔗 了解更多

- [Rsbuild文档](https://rsbuild.rs) - 探索Rsbuild特性和API
- [Chrome扩展文档](https://developer.chrome.com/docs/extensions/) - 学习Chrome扩展开发
- [React文档](https://reactjs.org/docs/getting-started.html) - 学习React