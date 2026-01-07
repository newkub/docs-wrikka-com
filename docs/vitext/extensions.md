---
title: Extensions
description: Extend Vitext functionality with powerful extensions
---

# Extensions

Vitext's extension system allows you to add new functionality and customize your development experience.

## Getting Started

### Installing Extensions

#### From Registry

```bash
# Install from official registry
vitext install @wrikka/vitext-typescript

# Install multiple extensions
vitext install @wrikka/vitext-git @wrikka/vitext-docker
```

#### From File

```bash
# Install from local file
vitext install ./my-extension.vitext

# Install from URL
vitext install https://github.com/user/extension/releases/latest/download/extension.vitext
```

### Managing Extensions

```bash
# List installed extensions
vitext extensions list

# Update extensions
vitext extensions update

# Remove extension
vitext extensions uninstall @wrikka/vitext-typescript

# Enable/disable extension
vitext extensions enable @wrikka/vitext-git
vitext extensions disable @wrikka/vitext-git
```

## Popular Extensions

### 🎨 Language Support

#### TypeScript

```bash
vitext install @wrikka/vitext-typescript
```

- IntelliSense support
- Type checking
- Auto-import
- Refactoring tools

#### Python

```bash
vitext install @wrikka/vitext-python
```

- Syntax highlighting
- Linting with Pylint
- Code formatting with Black
- Virtual environment support

#### Rust

```bash
vitext install @wrikka/vitext-rust
```

- Rust Analyzer integration
- Cargo commands
- Code completion
- Error highlighting

### 🛠️ Development Tools

#### Git Integration

```bash
vitext install @wrikka/vitext-git
```

- Git status in sidebar
- Inline blame information
- Staging and committing
- Branch management

#### Docker

```bash
vitext install @wrikka/vitext-docker
```

- Docker file syntax
- Container management
- Image building
- Service management

#### Database

```bash
vitext install @wrikka/vitext-database
```

- SQL syntax highlighting
- Database connections
- Query execution
- Schema visualization

### 🎯 Productivity

#### AI Assistant

```bash
vitext install @wrikka/vitext-ai
```

- Code generation
- Refactoring suggestions
- Documentation generation
- Chat interface

#### Snippets

```bash
vitext install @wrikka/vitext-snippets
```

- Code snippets
- Template expansion
- Custom snippets
- Language-specific snippets

#### Live Share

```bash
vitext install @wrikka/vitext-live-share
```

- Real-time collaboration
- Code sharing
- Voice chat
- Screen sharing

## Creating Extensions

### Extension Structure

```
my-extension/
├── package.json
├── README.md
├── src/
│   ├── extension.ts
│   ├── commands/
│   ├── views/
│   └── utils/
└── dist/
```

### Basic Extension

#### package.json

```json
{
	"name": "@wrikka/vitext-my-extension",
	"version": "1.0.0",
	"description": "My custom Vitext extension",
	"main": "dist/extension.js",
	"engines": {
		"vitext": "^1.0.0"
	},
	"categories": ["Other"],
	"activationEvents": ["onCommand:myExtension.helloWorld"],
	"contributes": {
		"commands": [
			{
				"command": "myExtension.helloWorld",
				"title": "Hello World"
			}
		]
	}
}
```

#### src/extension.ts

```typescript
import { commands, Extension, window } from "@wrikka/vitext";

export function activate(context: Extension) {
  console.log("Extension \"my-extension\" is now active!");

  let disposable = commands.registerCommand("myExtension.helloWorld", () => {
    window.showInformationMessage("Hello World from My Extension!");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
```

### Extension API

#### Commands

```typescript
// Register command
commands.registerCommand("extension.command", () => {
  // Command logic
});

// Execute command
commands.executeCommand("workbench.action.files.save");
```

#### Window

```typescript
// Show information message
window.showInformationMessage("Message");

// Show error message
window.showErrorMessage("Error");

// Show input box
const result = await window.showInputBox({
  prompt: "Enter your name",
  placeHolder: "Name",
});
```

#### Workspace

```typescript
// Get workspace folders
const folders = workspace.workspaceFolders;

// Read file
const content = await workspace.fs.readFile(uri);

// Write file
await workspace.fs.writeFile(uri, content);
```

## Configuration

### Extension Settings

```json
{
	"contributes": {
		"configuration": {
			"title": "My Extension",
			"properties": {
				"myExtension.setting": {
					"type": "boolean",
					"default": true,
					"description": "Enable my extension feature"
				}
			}
		}
	}
}
```

### Accessing Settings

```typescript
const config = workspace.getConfiguration("myExtension");
const enabled = config.get<boolean>("setting", true);
```

## Publishing Extensions

### Build Extension

```bash
# Build for production
bun build

# Package extension
vitext package
```

### Publish to Registry

```bash
# Login to registry
vitext login

# Publish extension
vitext publish
```

### Version Management

```json
{
	"version": "1.0.0",
	"engines": {
		"vitext": "^1.0.0"
	}
}
```

## Extension Marketplace

### Official Registry

- Browse extensions at [extensions.wrikka.com](https://extensions.wrikka.com)
- Filter by category, rating, downloads
- Read reviews and documentation

### Community Extensions

- Contribute to community extensions
- Report issues and suggest features
- Share your extensions with others

## Best Practices

### Performance

- Lazy load heavy operations
- Use web workers for CPU-intensive tasks
- Dispose resources properly
- Avoid blocking the UI thread

### User Experience

- Provide clear error messages
- Include helpful documentation
- Follow UI/UX guidelines
- Test on different platforms

### Code Quality

- Write TypeScript for type safety
- Include comprehensive tests
- Follow coding standards
- Document your API

## Resources

### Documentation

- Check our [FAQ](./faq)
- Join our [community](https://discord.gg/wrikka)
- Report issues on [GitHub](https://github.com/newkub/wrikka/issues)

---

_Have questions? Join our [Discord server](https://discord.gg/wrikka) or check out our [FAQ](./faq)._
