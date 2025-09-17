# Bundle Analysis

## Build Analysis
```bash
# Generate stats
pnpm build --profile

# Analyze bundle
pnpm analyze
```

## Webpack Bundle Analyzer
1. Install:
```bash
pnpm add -D webpack-bundle-analyzer
```

2. Add to vite.config.ts:
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'webpack-bundle-analyzer'

export default defineConfig({
  plugins: [
    react(),
    visualizer()
  ]
})
```

## Performance Metrics
```bash
# Lighthouse audit
pnpm lighthouse http://localhost:3000
```
