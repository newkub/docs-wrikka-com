# Upgrading Vite-React

## Version Compatibility
| Vite-React | React | Vite | Node |
|------------|-------|------|------|
| 2.x        | 18+   | 4+   | 18+  |
| 1.x        | 17+   | 3+   | 16+  |

## Upgrade Steps
1. Update package.json:
```bash
pnpm up -i
```

2. Check breaking changes:
```bash
pnpm changelog
```

3. Run migration script if available:
```bash
pnpm migrate
```

4. Test after upgrade:
```bash
pnpm test
pnpm build
```
