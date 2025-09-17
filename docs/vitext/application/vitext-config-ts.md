# ตั้งค่า Vitext ด้วย TypeScript

## ไฟล์ `vitext.config.ts`
```typescript
import { defineConfig } from 'vitext'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
```

## คำอธิบาย
- `plugins`: กำหนดปลั๊กอินต่างๆ
- `server`: ตั้งค่าการทำงานของเซิร์ฟเวอร์
- `optimizeDeps`: กำหนดให้ระบบปรับปรุงประสิทธิภาพของ dependencies

## ตัวอย่างการใช้งาน
```typescript
import { defineConfig } from 'vitext'
import { sass } from 'sass'

export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass
      }
    }
  }
})
```