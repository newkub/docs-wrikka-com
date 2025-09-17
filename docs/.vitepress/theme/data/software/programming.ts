import type { Content } from '../../../types/content'

export const programmingData: { [key: string]: Content[] } = {
  'Frontend Languages': [
    { 
      title: 'JavaScript', 
      externallink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      internallink: '/software/javascript',
      description: 'Scripting language for web pages',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755883330/learn-wrikka-com/tyvrq0ng3ujmtjyc1ru1.webp'
    },
    {
      title: 'TypeScript',
      externallink: 'https://www.typescriptlang.org',
      internallink: '/software/typescript',
      description: 'Typed superset of JavaScript for large applications',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755883299/learn-wrikka-com/ogelt45wqjfpe98ljujn.webp'
    }
  ],
  'Data Structures Algorithms': [
    {
      title: 'JavaScript Data Structures',
      externallink: '/software/javascript-data-structure',
      internallink: '/software/javascript-data-structure',
      description: 'Fundamental data structures for programming',
      cover: '/images/programming/javascript-data-structure.webp'
    },
    {
      title: 'Algorithms',
      externallink: 'https://algorithm-visualizer.org/',
      description: 'Basic algorithms for computer problem solving',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755883323/learn-wrikka-com/ggt7hki3csonfxlkmego.webp'
    }
  ],
  'JavaScript Runtimes': [
    {
      title: 'Node.js',
      externallink: 'https://nodejs.org',
      internallink: '/software/nodejs',
      description: 'JavaScript runtime built on Chrome\'s V8 engine',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755883302/learn-wrikka-com/zjg3czocokb2sceccxco.webp'
    },
    {
      title: 'Bun',
      externallink: 'https://bun.sh',
      internallink: '/software/bun',
      description: 'Fast all-in-one JavaScript runtime',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755883356/learn-wrikka-com/fooyu0o6olyuzacigdoz.webp'
    }
  ],
}
