---
title: FAQ
description: Frequently asked questions about Vitext
---

# Frequently Asked Questions

Find answers to common questions about Vitext.

## General

### What is Vitext?

Vitext is a modern text editor and development environment built for productivity and performance. It provides intelligent features, extensibility, and a great developer experience.

### Is Vitext free?

Yes, Vitext is open source and completely free to use. It's licensed under the MIT license.

### What platforms does Vitext support?

Vitext supports:

- Windows (10 and later)
- macOS (10.15 and later)
- Linux (Ubuntu, Fedora, Arch, and other distributions)

### How do I install Vitext?

```bash
# Global installation
bun add -g @wrikka/vitext

# Project installation
bun add -D @wrikka/vitext
```

## Installation & Setup

### Why isn't Vitext starting?

Check these common issues:

1. Ensure Node.js 18 or higher is installed
2. Verify the installation path is in your system PATH
3. Check if another process is using the same port

### How do I update Vitext?

```bash
# Update global installation
bun update -g @wrikka/vitext

# Update project installation
bun update @wrikka/vitext
```

### Can I use Vitext with existing projects?

Yes! Vitext works with any project structure. Simply navigate to your project directory and run `vitext`.

## Features

### Does Vitext support Git?

Yes, Vitext has built-in Git integration including:

- Status indicators
- Inline blame information
- Staging and committing
- Branch management

### Can I use multiple cursors?

Yes, press `Ctrl+Alt+Up/Down` (or `Cmd+Alt+Up/Down` on Mac) to add additional cursors.

### How do I enable word wrap?

You can enable word wrap through:

- Command Palette: "View: Toggle Word Wrap"
- Settings: `editor.wordWrap: true`
- Configuration file: `wordWrap: true`

### Does Vitext have a terminal?

Yes, Vitext includes an integrated terminal. Press `Ctrl+\` (or`Cmd+\` on Mac) to toggle it.

## Extensions

### How do I install extensions?

```bash
# From registry
vitext install @wrikka/vitext-typescript

# From file
vitext install ./extension.vitext

# List installed
vitext extensions list
```

### Where can I find extensions?

Browse the official extension marketplace at [extensions.wrikka.com](https://extensions.wrikka.com).

### Can I create my own extensions?

Yes! Check out our [extension development guide](./extensions) to learn how to create custom extensions.

### How do I disable an extension?

```bash
vitext extensions disable @wrikka/vitext-git
```

## Themes

### How do I change the theme?

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type "Theme"
3. Select "Preferences: Color Theme"
4. Choose your preferred theme

### Can I create custom themes?

Yes! See our [themes documentation](./themes) for detailed instructions on creating custom themes.

### Where are themes stored?

Themes are stored in:

- Windows: `%APPDATA%/Vitext/themes`
- macOS: `~/Library/Application Support/Vitext/themes`
- Linux: `~/.config/Vitext/themes`

## Performance

### Why is Vitext slow?

Common causes and solutions:

1. **Large files**: Use file exclusion settings
2. **Too many extensions**: Disable unused extensions
3. **High CPU usage**: Check background processes
4. **Memory issues**: Increase available memory

### How do I improve performance?

```javascript
// vitext.config.js
export default {
  performance: {
    smoothScrolling: false,
    renderValidationDecorations: "off",
    renderLineHighlight: "none",
    renderWhitespace: "none",
  },
};
```

### Can Vitext handle large files?

Yes, Vitext can handle large files, but performance may vary. For files over 10MB, consider:

- Using file exclusion patterns
- Disabling certain features
- Using specialized tools for very large files

## Configuration

### Where is the configuration file?

The main configuration file is `vitext.config.js` in your project root. User-specific settings are stored in:

- Windows: `%APPDATA%/Vitext/User/settings.json`
- macOS: `~/Library/Application Support/Vitext/User/settings.json`
- Linux: `~/.config/Vitext/User/settings.json`

### How do I reset settings?

```bash
# Reset to defaults
vitext settings reset

# Reset specific setting
vitext settings reset editor.fontSize
```

### Can I sync settings across devices?

Yes! Use the Settings Sync feature:

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type "Sync"
3. Select "Settings Sync: Turn On"
4. Follow the setup instructions

## Troubleshooting

### Vitext crashes on startup

Try these solutions:

1. Clear cache: `vitext --clear-cache`
2. Reset settings: `vitext --reset-settings`
3. Disable extensions: `vitext --disable-extensions`
4. Reinstall Vitext

### Extensions aren't working

Check these:

1. Ensure extensions are compatible with your Vitext version
2. Check extension logs for errors
3. Try disabling and re-enabling the extension
4. Report the issue to the extension author

### Keyboard shortcuts not working

1. Check for conflicts with system shortcuts
2. Verify shortcuts in settings
3. Try resetting keyboard shortcuts
4. Check if custom keybindings are interfering

### Files not saving automatically

Enable auto-save:

```javascript
// vitext.config.js
export default {
  files: {
    autoSave: "afterDelay",
    autoSaveDelay: 1000,
  },
};
```

## Development

### Can I contribute to Vitext?

Yes! We welcome contributions. Check out our [contributing guide](../contributing) for details.

### How do I report bugs?

Report bugs on our [GitHub issues](https://github.com/newkub/wrikka/issues) with:

- Detailed description
- Steps to reproduce
- Environment information
- Error logs

### Where can I get help?

- [Discord server](https://discord.gg/wrikka) - Real-time help
- [GitHub Discussions](https://github.com/newkub/wrikka/discussions) - Community support
- [Documentation](./index.md) - Official docs

## Comparison

### How is Vitext different from VS Code?

Vitext is built on similar principles but offers:

- Better performance for large projects
- More intuitive UI/UX
- Built-in AI capabilities
- Simpler configuration
- Faster startup times

### Should I switch from my current editor?

Consider switching if you:

- Want better performance
- Need AI-powered features
- Prefer a cleaner interface
- Want better TypeScript support

### Can I import settings from other editors?

Yes, Vitext can import settings from:

- VS Code
- Sublime Text
- Atom
- WebStorm

## Licensing

### Can I use Vitext commercially?

Yes, Vitext is licensed under MIT, which allows commercial use.

### Can I distribute Vitext with my application?

Yes, you can distribute Vitext with your application as long as you comply with the MIT license terms.

---

_Still have questions? Join our [Discord server](https://discord.gg/wrikka.com) or check out our [documentation](./index.md)._
