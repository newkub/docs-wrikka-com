import type { Content } from '../../../types/content'

export const testingData: { [key: string]: Content[] } = {
  'Unit Testing': [
    { 
      title: 'Vitest', 
      internallink: '/software/vitest',
      externallink: 'https://vitest.dev', 
      description: 'Vitest test runner with Vite-native speed and compatibility',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755629947/learn-wrikka-com/j1krmpt6qweczi3oewn6.webp'
    },
  ],
  'Backend Testing': [
    { 
      title: 'Japa', 
      externallink: 'https://japa.dev/docs/introduction', 
      description: 'Japa test runner for Node.js with minimal configuration',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755629946/learn-wrikka-com/pgcqcmbhqc8cr1m8mzc5.webp'
    },
  ],
  'E2E Testing': [
    { 
      title: 'Playwright', 
      externallink: 'https://playwright.dev', 
      description: 'Playwright end-to-end testing for modern web apps',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755630037/learn-wrikka-com/dxllo1ebbhhooljeystl.webp'
    },
  ],
  'AI Testing': [
    { 
      title: 'TestSprite', 
      externallink: 'https://www.testsprite.com', 
      description: 'AI-powered test automation platform that intelligently creates and runs test cases',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755630126/learn-wrikka-com/txiauf2nuobnvexvqxb0.webp'
    } 
  ],
}
