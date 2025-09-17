# Vite-React Extensions

## Official Extensions

- `@vite-react/ssr` - Server-side rendering support
- `@vite-react/auth` - Authentication utilities
- `@vite-react/i18n` - Internationalization tools

## Installation
```bash
pnpm add @vite-react/ssr @vite-react/auth
```

## Configuration
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from '@vite-react/ssr'

export default defineConfig({
  plugins: [
    react(),
    ssr()
  ]
})
```
