# MCP Server Integration

## Setup
1. Install required packages:
```bash
pnpm add @mcp/server @mcp/client
```

2. Create server configuration:
```ts
// mcp.config.ts
export default {
  port: 3001,
  endpoints: {
    '/api': {
      handler: './src/server/api.ts'
    }
  }
}
```

## Development Commands
```bash
# Start dev server
pnpm mcp:dev

# Build for production
pnpm mcp:build
```
