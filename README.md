# Chrome Plugin

A powerful Chrome extension built with modern web technologies.

## 🚀 Features

- **Performance Optimized**: Built with efficiency in mind for smooth user experience
- **Customizable**: Tailor the extension to your specific workflow needs

## 📋 Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Contributing](#contributing)
- [License](#license)

## 🛠️ Installation

### Prerequisites

- Node.js (v16.0.0 or higher)
- pnpm (v7.0.0 or higher)
- Chrome browser (v90.0 or higher)

### Steps

1. Clone the repository

```bash
git clone https://github.com/your-username/git-chrome-plugin.git
cd git-chrome-plugin
```

2. Install dependencies

```bash
pnpm install
```

## 🚦 Getting Started

### Development Mode

Start the development server:

```bash
pnpm dev
```

This will launch a development server at `http://localhost:3000` and watch for file changes.

### Load the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions`
2. Enable "Developer mode" (toggle in the top-right corner)
3. Click "Load unpacked" and select the `dist` directory
4. The extension should now appear in your Chrome toolbar

## 📁 Project Structure

```
chrome-plugin-dev/
├── .gitignore           # Git ignore file
├── .vscode/             # VS Code configuration
├── README.md            # Project documentation
├── dist/                # Build output directory
├── package.json         # Project dependencies and scripts
├── pnpm-lock.yaml       # pnpm lock file
├── postcss.config.mjs   # PostCSS configuration
├── public/              # Static assets
├── rsbuild.config.ts    # Rsbuild configuration
├── src/                 # Source code
│   ├── contentScripts/  # Content scripts (injected into web pages)
│   ├── popup/           # Popup UI
│   └── serviceWorker/   # Background service worker
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## ⚙️ Configuration

### Rsbuild Configuration

The project uses Rsbuild for bundling. Key configurations in `rsbuild.config.ts`:

- **Entry Points**: Configured for popup, contentScripts, and serviceWorker
- **Output**: Customized filenames without hashes for specific chunks
- **Plugins**: Includes React plugin for JSX support
- **Target**: Service worker is built for Node environment

### Environment Variables

Create a `.env` file in the root directory to set environment variables:

```
API_URL=https://api.example.com
DEBUG=false
```

## 👨‍💻 Development

### Code Style

- ESLint and Prettier are used for code linting and formatting
- Follow the existing code style and conventions
- Write meaningful commit messages

### Testing

```bash
pnpm test
```

## 🏗️ Build & Deployment

### Production Build

Build the extension for production:

```bash
pnpm build
```

This will generate optimized files in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
pnpm preview
```

### Packaging for Chrome Web Store

1. Create a zip file of the `dist` directory
2. Follow the [Chrome Web Store publishing guidelines](https://developer.chrome.com/docs/webstore/publish/)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Learn More

- [Rsbuild documentation](https://rsbuild.rs) - explore Rsbuild features and APIs
- [Chrome Extension documentation](https://developer.chrome.com/docs/extensions/) - learn about Chrome extension development
- [React documentation](https://reactjs.org/docs/getting-started.html) - learn React
