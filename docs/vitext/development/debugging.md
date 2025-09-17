# Debugging Vite-React

## Chrome DevTools
1. Install [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/)
2. Use `debugger` statements in code
3. Inspect component hierarchy and props

## VS Code Debugging
1. Add launch configuration:
```json
{
  "type": "chrome",
  "request": "launch",
  "name": "Debug Vite-React",
  "url": "http://localhost:3000",
  "webRoot": "${workspaceFolder}/src"
}
```

## Common Issues
- **HMR not working**: Try `pnpm dev --force`
- **Type errors**: Run `pnpm type-check`
- **Build failures**: Check `pnpm build --debug`
