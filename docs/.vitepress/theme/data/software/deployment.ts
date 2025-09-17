import type { Content } from '../../../types/content'

export const deploymentData: { [key: string]: Content[] } = {
  'Serverless': [
    { 
      title: 'Vercel', 
      externallink: 'https://vercel.com', 
      description: 'Vercel platform for instant serverless deployments and edge networks',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755442962/learn-wrikka-com/syxdgc23ram5ejdxlyxs.webp'
    },
    { 
      title: 'NuxtHub', 
      externallink: 'https://hub.nuxt.com/', 
      description: 'Nuxt.js-specific deployment solution with integrated backend services',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755442901/learn-wrikka-com/ulayv3pyrliujf7nlgti.webp'
    },
    { 
      title: 'Wasmer', 
      externallink: 'https://wasmer.io/', 
      description: 'WebAssembly runtime for running serverless functions',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755442883/learn-wrikka-com/juqwotkigsgy5pvc3ydv.webp'
    },
  ],
  'Container': [
    { 
      title: 'Cloudflare Containers', 
      externallink: 'https://developers.cloudflare.com/containers/', 
      description: 'Cloudflare\'s global container deployment platform with edge computing',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755628703/learn-wrikka-com/qdmpgdcptuudifnfy0ny.webp'
    },
    { 
      title: 'Railway', 
      externallink: 'https://railway.app', 
      description: 'Railway\'s developer-friendly container orchestration platform',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755872799/learn-wrikka-com/f1bfkket9njf0bohqqra.webp'
    }
  ],
  'Virtual Machine': [
    { 
      title: 'Coolify', 
      externallink: 'https://coolify.io', 
      description: 'Flexible virtual machine hosting platform',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755887918/learn-wrikka-com/ceqmc6expnx5whijdym3.webp'
    },
    { 
      title: 'Dokploy', 
      externallink: 'https://dokploy.com', 
      description: 'High-security virtual machine hosting platform',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755887921/learn-wrikka-com/njqh649fgruxw2mkfxif.webp'
    }
  ]
}
