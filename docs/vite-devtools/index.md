# Vite DevTools

Development tools for Vite projects

## Features

- Component inspection
- State debugging
- Performance profiling
- Plugin visualization

## Installation

```bash
bun add -D @wrikka/vite-devtools
```

## Usage

```javascript
// vite.config.ts
import { defineConfig } from 'vite'
import devtools from '@wrikka/vite-devtools'

export default defineConfig({
  plugins: [
    devtools()
  ]
})
```

## Tools

- vite-plugin-inspect
- vite-plugin-debug
- vite-plugin-ssr-devtools
