# Error Handling

## Client-Side Errors
```tsx
// ErrorBoundary.tsx
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  )
}
```

## Server-Side Errors
```ts
// server/middleware/errorHandler.ts
export function errorHandler(err, req, res, next) {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal Server Error' })
}
```
