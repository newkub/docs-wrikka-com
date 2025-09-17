import type { Content } from '../../../types/content'

export const crossPlatformData: { [key: string]: Content[] } = {
  'Desktop': [
    { 
      title: 'Tauri', 
      externallink: 'https://tauri.app',
      description: 'Build smaller, faster, and more secure desktop applications with a web frontend.',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755877672/learn-wrikka-com/fife6jxwiyshfyo50x6j.webp'
    }
  ],
  'Mobile': [
    { 
      title: 'Flutter', 
      externallink: 'https://flutter.dev',
      description: 'Google\'s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755878526/learn-wrikka-com/pyehm0yqt3erw81y5blq.webp'
    },
    { 
      title: 'Capacitor', 
      externallink: 'https://capacitorjs.com',
      description: 'Build cross-platform native mobile apps and Progressive Web Apps with JavaScript, HTML, and CSS.',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755878392/learn-wrikka-com/hgd3psrjqkdmouzlajzt.webp'
    }
  ]
}
