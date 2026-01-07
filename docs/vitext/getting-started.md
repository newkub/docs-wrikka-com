---
title: Getting Started
description: Quick guide to get started with Vitext
---

# Getting Started with Vitext

Welcome to Vitext! This guide will help you get up and running with the modern text editor.

## Installation

### Global Installation
```bash
bun add -g @wrikka/vitext
```

### Project Installation
```bash
bun add -D @wrikka/vitext
```

## First Launch

### Launch Vitext
```bash
# Global installation
vitext

# Project installation
bun vitext
```

### Open a File or Directory
```bash
# Open specific file
vitext README.md

# Open directory
vitext ./src

# Open with specific line
vitext README.md:10
```

## Basic Workflow

1. **Open Project**: `vitext ./my-project`
2. **Explore Files**: Use the file explorer sidebar
3. **Start Coding**: Begin editing with intelligent assistance
4. **Save Work**: `Ctrl+S` (or `Cmd+S` on Mac)

## Essential Features

### File Explorer
- Navigate your project structure
- Create, rename, delete files
- Search and filter files

### Integrated Terminal
- Run commands without leaving the editor
- Multiple terminal tabs
- Command history

### Search & Replace
- Global search across files
- Regex support
- Case-sensitive options

### Git Integration
- View changes and diffs
- Stage and commit changes
- Branch management

## Configuration

Create a `vitext.config.js` file in your project root:

```js
export default {
  // Editor settings
  fontSize: 14,
  fontFamily: 'Fira Code',
  lineHeight: 1.6,
  
  // Behavior
  tabSize: 2,
  insertSpaces: true,
  wordWrap: true,
  
  // Features
  minimap: true,
  lineNumbers: true,
  autoComplete: true,
  
  // Theme
  theme: 'dark',
  syntaxHighlighting: true
}
```

## Next Steps

- [Learn about configuration](./configuration)
- [Explore extensions](./extensions)
- [Customize themes](./themes)
- [View API documentation](./api)

## Need Help?

- Check our [FAQ](./faq)
- Join our [community](https://discord.gg/wrikka)
- Report issues on [GitHub](https://github.com/newkub/wrikka/issues)
