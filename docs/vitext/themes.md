---
title: Themes
description: Customize the appearance of Vitext with beautiful themes
---

# Themes

Personalize Vitext with themes that match your style and improve your development experience.

## Built-in Themes

### Dark Themes

- **Dark** - Classic dark theme with good contrast
- **Monokai** - Popular dark theme with vibrant colors
- **Dracula** - Elegant dark theme with purple accents
- **Nord** - Calm dark theme inspired by Nordic colors

### Light Themes

- **Light** - Clean light theme with good readability
- **Solarized Light** - Eye-friendly light theme
- **GitHub Light** - Theme inspired by GitHub's interface
- **One Light** - Minimal light theme

### High Contrast

- **High Contrast** - Maximum contrast for accessibility
- **High Contrast Dark** - Dark version of high contrast

## Using Themes

### Switching Themes

```bash
# List available themes
vitext themes list

# Set theme
vitext themes set dark

# Get current theme
vitext themes get
```

### Configuration

```javascript
// vitext.config.js
export default {
  theme: "dark", // Theme name
};
```

### Command Palette

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type "Theme"
3. Select "Preferences: Color Theme"
4. Choose your preferred theme

## Custom Themes

### Creating a Theme

#### Basic Theme Structure

```javascript
// my-theme.js
export default {
  name: "My Custom Theme",
  type: "dark", // 'dark' or 'light'

  colors: {
    // Editor colors
    "editor.background": "#1E1E1E",
    "editor.foreground": "#D4D4D4",
    "editor.lineHighlightBackground": "#2D2D30",
    "editor.selectionBackground": "#264F78",
    "editor.inactiveSelectionBackground": "#3A3D41",

    // Sidebar colors
    "sideBar.background": "#252526",
    "sideBar.foreground": "#CCCCCC",
    "sideBarTitle.foreground": "#BBBBBB",

    // Activity bar
    "activityBar.background": "#333333",
    "activityBar.foreground": "#FFFFFF",
    "activityBarBadge.background": "#007ACC",

    // Tab colors
    "tab.activeBackground": "#1E1E1E",
    "tab.inactiveBackground": "#2D2D30",
    "tab.activeForeground": "#FFFFFF",
    "tab.inactiveForeground": "#CCCCCC",
  },

  tokenColors: [
    {
      name: "Comments",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#6A9955",
        fontStyle: "italic",
      },
    },
    {
      name: "Keywords",
      scope: ["keyword", "storage.type"],
      settings: {
        foreground: "#569CD6",
      },
    },
    {
      name: "Strings",
      scope: ["string", "string.quoted"],
      settings: {
        foreground: "#CE9178",
      },
    },
    {
      name: "Numbers",
      scope: ["constant.numeric"],
      settings: {
        foreground: "#B5CEA8",
      },
    },
    {
      name: "Functions",
      scope: ["entity.name.function", "support.function"],
      settings: {
        foreground: "#DCDCAA",
      },
    },
    {
      name: "Variables",
      scope: ["variable", "support.variable"],
      settings: {
        foreground: "#9CDCFE",
      },
    },
    {
      name: "Types",
      scope: ["entity.name.type", "support.type"],
      settings: {
        foreground: "#4EC9B0",
      },
    },
  ],
};
```

### Installing Custom Themes

#### Local Theme

```javascript
// vitext.config.js
export default {
  theme: {
    name: "My Theme",
    type: "dark",
    colors: {
      "editor.background": "#1E1E1E",
      "editor.foreground": "#D4D4D4",
      // ... more colors
    },
    tokenColors: [
      // ... token colors
    ],
  },
};
```

#### Theme Extension

```json
// package.json
{
	"name": "@wrikka/vitext-my-theme",
	"version": "1.0.0",
	"engines": {
		"vitext": "^1.0.0"
	},
	"categories": ["Themes"],
	"contributes": {
		"themes": [
			{
				"label": "My Theme",
				"uiTheme": "vs-dark",
				"path": "./themes/my-theme.json"
			}
		]
	}
}
```

## Theme Development

### Color Palette

#### Semantic Colors

```javascript
{
  // Base colors
  'foreground': '#000000',
  'background': '#FFFFFF',
  
  // Editor colors
  'editor.background': '#FFFFFF',
  'editor.foreground': '#000000',
  'editor.lineHighlightBackground': '#F0F0F0',
  'editor.selectionBackground': '#ADD6FF',
  'editor.inactiveSelectionBackground': '#E5EBF1',
  
  // Widget colors
  'widget.background': '#F3F3F3',
  'widget.border': '#C8C8C8',
  
  // Button colors
  'button.background': '#007ACC',
  'button.foreground': '#FFFFFF',
  'button.hoverBackground': '#1E80EF',
  
  // Input colors
  'input.background': '#FFFFFF',
  'input.foreground': '#000000',
  'input.border': '#C8C8C8',
  'input.placeholderForeground': '#767676'
}
```

### Token Colors

#### Syntax Highlighting

```javascript
{
  tokenColors: [
    // Comments
    {
      name: "Comments",
      scope: "comment",
      settings: { foreground: "#6A9955", fontStyle: "italic" },
    },

    // Keywords
    {
      name: "Keywords",
      scope: "keyword",
      settings: { foreground: "#0000FF" },
    },

    // Strings
    {
      name: "Strings",
      scope: "string",
      settings: { foreground: "#A31515" },
    },

    // Numbers
    {
      name: "Numbers",
      scope: "constant.numeric",
      settings: { foreground: "#098658" },
    },

    // Functions
    {
      name: "Functions",
      scope: "entity.name.function",
      settings: { foreground: "#795E26" },
    },
  ];
}
```

### Language-Specific Themes

#### TypeScript Theme

```javascript
{
  tokenColors: [
    {
      name: "TypeScript types",
      scope: ["entity.name.type", "support.type"],
      settings: { foreground: "#267F99" },
    },
    {
      name: "TypeScript interfaces",
      scope: "entity.name.type.interface",
      settings: { foreground: "#267F99", fontStyle: "underline" },
    },
    {
      name: "TypeScript decorators",
      scope: "decorator",
      settings: { foreground: "#C586C0" },
    },
  ];
}
```

## Popular Community Themes

### Dark Themes

- **Material Theme** - Material Design inspired
- **One Dark Pro** - Atom's One Dark theme
- **Palenight** - Elegant dark theme
- **Cobalt2** - Colorful dark theme

### Light Themes

- **Material Theme Lighter** - Light version of Material Theme
- **One Light** - Clean and minimal
- **Solarized Light** - Eye-friendly theme
- **GitHub Light** - GitHub inspired

### Specialized Themes

- **Ayu** - Modern with good contrast
- **Shades of Purple** - Purple-focused theme
- **Night Owl** - Dark theme for night coding
- **SynthWave '84** - Retro synthwave theme

## Theme Best Practices

### Color Contrast

- Ensure good contrast ratios (4.5:1 minimum)
- Test with contrast checkers
- Consider accessibility guidelines

### Consistency

- Use consistent color families
- Maintain semantic meaning
- Follow established patterns

### Performance

- Minimize color definitions
- Use efficient color schemes
- Avoid unnecessary complexity

## Resources

### Tools

- Online theme creator
- Color selection tool
- Accessibility checker

### Inspiration

- Pre-made color schemes
- Community themes
- Design guidelines

---

_Share your themes with the community! Submit them to our theme marketplace._
