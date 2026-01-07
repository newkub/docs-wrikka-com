---
title: Configuration
description: Customize Vitext to match your workflow
---

# Configuration

Vitext is highly configurable through a simple `vitext.config.js` file in your project root.

## Basic Configuration

Create a `vitext.config.js` file:

```javascript
export default {
  // Editor settings
  fontSize: 14,
  fontFamily: "Fira Code",
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
  theme: "dark",
  syntaxHighlighting: true,
};
```

## Editor Settings

### Typography

```javascript
export default {
  fontSize: 14, // Font size in pixels
  fontFamily: "Fira Code", // Font family
  lineHeight: 1.6, // Line height
  fontWeight: "400", // Font weight
  letterSpacing: 0, // Letter spacing
};
```

### Indentation

```javascript
export default {
  tabSize: 2, // Size of a tab in spaces
  insertSpaces: true, // Insert spaces instead of tabs
  detectIndentation: true, // Auto-detect indentation from file
  autoIndent: true, // Auto-indent on new lines
};
```

## Editor Behavior

### Scrolling

```javascript
export default {
  smoothScrolling: true, // Smooth scrolling animation
  scrollBeyondLastLine: true, // Allow scrolling past last line
  verticalScrollbarSize: 14, // Vertical scrollbar width
  horizontalScrollbarSize: 14, // Horizontal scrollbar height
};
```

### Cursor

```javascript
export default {
  cursorStyle: "line", // 'line', 'block', 'underline', 'line-thin'
  cursorBlinking: "blink", // 'blink', 'smooth', 'phase', 'expand', 'solid'
  cursorSmoothCaretAnimation: true,
  cursorSurroundingLines: 0,
};
```

## Features

### IntelliSense

```javascript
export default {
  autoComplete: true, // Enable auto-completion
  suggestOnTriggerCharacters: true,
  acceptSuggestionOnEnter: "on",
  acceptSuggestionOnCommitCharacter: true,
  quickSuggestions: true,
  suggestSelection: "first",
};
```

### Minimap

```javascript
export default {
  minimap: {
    enabled: true,
    side: "right", // 'left' or 'right'
    showSlider: "always", // 'always', 'mouseover'
    renderCharacters: true,
    maxColumn: 120,
    scale: 1,
  },
};
```

### Line Numbers

```javascript
export default {
  lineNumbers: "on", // 'on', 'off', 'relative', 'interval'
  lineNumbersMinChars: 5,
  folding: true,
  foldingStrategy: "auto",
  showFoldingHighlights: true,
};
```

## Themes

### Built-in Themes

```javascript
export default {
  theme: "dark", // 'dark', 'light', 'high-contrast'
};
```

### Custom Theme

```javascript
export default {
  theme: {
    base: "vs-dark", // 'vs', 'vs-dark', 'hc-black'
    inherit: true,
    rules: [
      { token: "comment", foreground: "6A9955" },
      { token: "keyword", foreground: "569CD6" },
      { token: "string", foreground: "CE9178" },
    ],
    colors: {
      "editor.background": "#1E1E1E",
      "editor.foreground": "#D4D4D4",
      "editor.lineHighlightBackground": "#2D2D30",
    },
  },
};
```

## Language-Specific Settings

Configure settings for specific languages:

```javascript
export default {
  languageConfigurations: [
    {
      language: "typescript",
      settings: {
        tabSize: 2,
        insertSpaces: true,
        autoComplete: true,
      },
    },
    {
      language: "python",
      settings: {
        tabSize: 4,
        insertSpaces: true,
        autoComplete: true,
      },
    },
  ],
};
```

## Keybindings

### Custom Keybindings

```javascript
export default {
  keybindings: [
    {
      key: "ctrl+s",
      command: "workbench.action.files.save",
    },
    {
      key: "ctrl+shift+p",
      command: "workbench.action.showCommands",
    },
    {
      key: "ctrl+b",
      command: "workbench.action.toggleSidebar",
    },
  ],
};
```

## Extensions

### Extension Configuration

```javascript
export default {
  extensions: {
    enabled: ["@wrikka/vitext-typescript", "@wrikka/vitext-git"],
    disabled: [],
    config: {
      "@wrikka/vitext-typescript": {
        autoImport: true,
        typeChecking: true,
      },
      "@wrikka/vitext-git": {
        autoStage: false,
        showInlineCommits: true,
      },
    },
  },
};
```

## Advanced Configuration

### Performance

```javascript
export default {
  performance: {
    smoothScrolling: true,
    renderValidationDecorations: "on",
    renderLineHighlight: "line",
    renderWhitespace: "selection",
    renderControlCharacters: false,
    renderIndentGuides: true,
    renderFinalNewline: true,
  },
};
```

### Experimental Features

```javascript
export default {
  experimental: {
    inlineCompletions: true,
    inlineSuggest: true,
    stickyScroll: true,
    inlineEdit: true,
  },
};
```

## Environment Variables

You can also configure Vitext using environment variables:

```bash
VITEXT_THEME=dark
VITEXT_FONT_SIZE=14
VITEXT_TAB_SIZE=2
VITEXT_WORD_WRAP=true
```

## Configuration Validation

Vitext validates your configuration and provides helpful error messages:

```javascript
// This will show an error
export default {
  fontSize: "14", // Should be a number
  invalidOption: true, // Unknown option
};
```

## Examples

Check out our examples for common setups:

- TypeScript Development
- Python Development
- Web Development
- Minimal Configuration
