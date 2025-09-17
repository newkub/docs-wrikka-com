# การตั้งค่าโปรเจ็กต์ Vitext

## 1. ติดตั้ง Vite
```bash
npm install -g vite
```

## 2. สร้างโปรเจ็กต์
::: code-group

```bash [npm]
npm create vite@latest my-app
```

```bash [yarn]
yarn create vite my-app
```

```bash [pnpm]
pnpm create vite my-app
```

:::

## 3. ติดตั้ง dependencies
```bash
cd my-app
npm install
```

## 4. เริ่มต้น development server
```bash
npm run dev
```

## 5. Build สำหรับ production
```bash
npm run build
```

## 6. Preview production build
```bash
npm run preview
```

## โครงสร้างโปรเจ็กต์
```
my-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```