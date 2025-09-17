import type { Content } from '../../../types/content'

export const devtoolsData: { [key: string]: Content[] } = {
  'IDE': [
    {
      title: 'StackBlitz',
      internallink: '/software/stackblitz',
      externallink: 'https://stackblitz.com',
      description: 'Full-featured online IDE with instant dev environment setup',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879266/learn-wrikka-com/gh6ykrczlr3jxjbgtukb.webp'
    },
    {
      title: 'VSCode',
      internallink: '/software/vscode',
      externallink: 'https://code.visualstudio.com',
      description: 'Lightweight but powerful source code editor with rich extension ecosystem',
      cover: 'https://code.visualstudio.com/assets/home/hero-poster-dark.webp'
    },
    {
      title: 'Cursor',
      externallink: 'https://www.cursor.com',
      description: 'AI-first code editor with built-in pair programming capabilities',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879865/learn-wrikka-com/l7jcecivqlrphmqfzouz.webp'
    },
    {
      title: 'Windsurf',
      internallink: '/software/windsurf',
      externallink: 'https://windsurf.com/',
      description: 'Modern cloud-based IDE with collaborative editing features',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879970/learn-wrikka-com/klbamclnhnnhesirdgtg.webp'
    },
    {
      title: 'Zed',
      externallink: 'https://zed.dev',
      description: 'High-performance, collaborative code editor with native Rust core',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879795/learn-wrikka-com/aznvrkzl59cuifd1tt9p.webp'
    },
    {
      title: 'Trae',
      externallink: 'https://trae.ai',
      description: 'AI-powered editor with contextual code understanding',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879781/learn-wrikka-com/rk00teupbhqu70m3rzfi.webp'
    },
    {
      title: 'Visual Studio Code',
      externallink: 'https://code.visualstudio.com/',
      description: 'Lightweight but powerful source code editor',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755878792/learn-wrikka-com/dhjy3i9zluoqjabl08gb.webp'
    }
  ],
  'Text Editors': [
    {
      title: 'Helix',
      externallink: 'https://helix-editor.com',
      description: 'Modal editor written in Rust with built-in language server support',
      cover: 'https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2025/04/helix-editor-tutorial.jpg'
    },
    {
      title: 'LunarVim',
      externallink: 'https://www.lunarvim.org/',
      description: 'Neovim-based IDE with sensible defaults and modern features',
      cover: 'https://www.lunarvim.org/img/lunarvim_preview.png'
    }
  ],
  'Terminal Shell': [
    {
      title: 'WezTerm',
      externallink: 'https://wezterm.org',
      internallink: '/software/wezterm',
      description: 'GPU-accelerated cross-platform terminal with tabs and pane splitting',
      cover: 'https://wezterm.org/screenshots/wezterm-kde-background-blur.png'
    },
    {
      title: 'Starship',
      externallink: 'https://starship.rs',
      internallink: '/software/starship',
      description: 'Customizable, fast, and feature-rich shell prompt for any shell',
      cover: 'https://www.edivaldobrito.com.br/wp-content/uploads/2021/06/como-instalar-o-prompt-minimalista-starship-no-linux-via-snap.jpg'
    },
    {
      title: 'PowerShell',
      externallink: 'https://learn.microsoft.com/powershell',
      internallink: '/software/powershell',
      description: 'Cross-platform automation tool and configuration framework',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755880054/learn-wrikka-com/vpew5qhewoweenzi8jbt.webp'
    }
  ],
  'CLI Tools': [
    {
      title: 'zoxide',
      externallink: 'https://github.com/ajeetdsouza/zoxide',
      description: 'A faster way to navigate your filesystem',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879163/learn-wrikka-com/hpje1xvx6bbkenbez1j6.webp'
    },
    {
      title: 'node-modules-inspector',
      externallink: 'https://github.com/antfu/node-modules-inspector',
      description: 'Inspect and visualize node_modules',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879083/learn-wrikka-com/n92uyjziccqstuuwxt4a.webp'
    },
    {
      title: 'duf',
      externallink: 'https://github.com/muesli/duf',
      description: 'Disk usage analyzer',
      cover: 'https://github.com/muesli/duf/raw/master/duf.png'
    },
    {
      title: 'fd',
      externallink: 'https://github.com/sharkdp/fd',
      description: 'Simple, fast and user-friendly alternative to find',
      cover: 'https://github.com/sharkdp/fd/raw/master/doc/screencast.svg'
    },
    {
      title: 'broot',
      externallink: 'https://github.com/Canop/broot',
      description: 'A better way to navigate your filesystem',
      cover: 'https://github.com/Canop/broot/raw/main/website/docs/img/20230930-overview.png'
    },
    {
      title: 'ripgrep',
      externallink: 'https://github.com/BurntSushi/ripgrep',
      description: 'Line-oriented search tool',
      cover: 'https://camo.githubusercontent.com/76c07053bbeb928779ebd76507970f2d79578b16752414c97ac551557c40531c/68747470733a2f2f6275726e7473757368692e6e65742f73747566662f72697067726570312e706e67'
    },
    {
      title: 'television',
      externallink: 'https://github.com/alexpasmantier/television',
      description: 'A terminal-based video player',
      cover: 'https://github.com/alexpasmantier/television/raw/main/assets/tv-transparent.png'
    },
    {
      title: 'yazi',
      externallink: 'https://github.com/sxyazi/yazi',
      description: 'A terminal-based text editor',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755878732/learn-wrikka-com/bpcr25xzqg4nvoa5lvho.webp'
    },
    {
      title: 'npkill',
      externallink: 'https://www.npmjs.com/package/npkill',
      description: 'List and kill processes using npm',
      cover: 'https://raw.githubusercontent.com/zaldih/npkill/HEAD/docs/npkill-demo-0.10.0.gif'
    },
    {
      title: 'nnn',
      externallink: 'https://github.com/jarun/nnn',
      description: 'Blazing fast terminal file manager with minimal memory usage',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879230/learn-wrikka-com/isvroswslgt3qshqwgdg.webp'
    }
  ],
  'File Managers': [
    {
      title: 'chezmoi',
      externallink: 'https://chezmoi.io',
      internallink: '/software/chezmoi',
      description: 'Dotfiles manager',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879723/learn-wrikka-com/wsajkpaaqscgg9i2lspm.webp'
    }
  ],
  'Version-Control': [
    { 
      title: 'Git', 
      externallink: 'https://git-scm.com', 
      internallink: '/software/git',
      description: 'Version control system',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879432/learn-wrikka-com/si7s64co1hjdbk1urijj.webp'
    },
    { 
      title: 'Lefthook', 
      externallink: 'https://github.com/evilmartians/lefthook', 
      description: 'Git hooks manager',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755887798/learn-wrikka-com/veep96we6d22j8wyxzl6.webp'
    },
    { 
      title: 'cz-git', 
      externallink: 'https://cz-git.qbb.sh',
      internallink: '/software/cz-git',
      description: 'Commitizen adapter for Git',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755887567/learn-wrikka-com/vtbbnxsy9gw1dio5szo1.webp'
    },
    { 
      title: 'Volta', 
      externallink: 'https://volta.net', 
      description: 'Polyglot runtime manager (like asdf but faster and more modern)' ,
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879337/learn-wrikka-com/puhqv3vspivv4wquhmsm.webp'
    },
    { 
      title: 'GitButler', 
      externallink: 'https://gitbutler.com/', 
      internallink: '/software/gitbutler',
      description: 'Git commit history viewer',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879407/learn-wrikka-com/xv44wayoqq7m4wfmmzzh.webp'
    },
    { 
      title: 'gitui', 
      externallink: 'https://github.com/extrawurst/gitui', 
      internallink: '/software/gitui',
      description: 'Git commit history viewer',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879586/learn-wrikka-com/dfb9vwbvr2wt1h4eym2s.webp'
    }
  ],
  'Package-Manager': [
    {
      title: 'bun pm',
      externallink: 'https://bun.com/package-manager',
      description: 'Fast JavaScript/TypeScript runtime & package manager',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755880120/learn-wrikka-com/tubtg73gkkiplk7iay77.webp'
    },
    {
      title: 'mise',
      externallink: 'https://mise.jdx.dev',
      internallink: '/software/mise',
      description: 'Polyglot runtime manager (like asdf but faster and more modern)',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879442/learn-wrikka-com/wzaocpehc1xbk5ih9gzl.webp'
    },
    {
      title: 'pnpm',
      externallink: 'https://pnpm.io',
      internallink: '/software/pnpm',
      description: 'Fast, disk-space efficient package manager using content-addressable storage',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879352/learn-wrikka-com/uxgmjkeywzuoe8s12u3q.webp'
    },
    {
      title: 'scoop',
      externallink: 'https://scoop.sh',
      internallink: '/software/scoop',
      description: 'Windows package manager that installs programs in portable mode',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879536/learn-wrikka-com/pb0fzcmiwxbytt4ilcuz.webp'
    },
    {
      title: 'taze',
      externallink: 'https://github.com/antfu/taze',
      internallink: '/software/taze',
      description: 'Smart dependency version checker and updater',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879502/learn-wrikka-com/xutbe702jdzezwceknhp.webp'
    },
    {
      title: 'release-it',
      externallink: 'https://github.com/release-it/release-it',
      internallink: '/software/release-it',
      description: 'Automated version management and package publishing tool',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755879509/learn-wrikka-com/ztzpqeorg79znmpderzv.webp'
    }
  ],
  'VSCode-Extensions': [
    {
      title: 'Even Better TOML',
      externallink: 'https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml',
      description: 'Enhanced TOML language support with syntax highlighting and validation',
      cover: '/images/devtools/even-better-toml.webp'
    },
    {
      title: 'Vue - Official',
      externallink: 'https://marketplace.visualstudio.com/items?itemName=Vue.volar',
      description: 'Official Vue.js tooling with TypeScript support',
      cover: '/images/devtools/vue-official.webp'
    },
    {
      title: 'UnoCSS',
      externallink: 'https://marketplace.visualstudio.com/items?itemName=antfu.unocss',
      description: 'Instant atomic CSS engine with IntelliSense support',
      cover: '/images/devtools/unocss.webp'
    },
    {
      title: 'TailwindCSS',
      externallink: 'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss',
      description: 'Intelligent Tailwind CSS tooling with autocomplete and linting',
      cover: '/images/devtools/tailwindcss.webp'
    },
    {
      title: 'Nuxtr',
      externallink: 'https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode',
      description: 'Enhanced development experience for Nuxt.js applications',
      cover: '/images/devtools/nuxtr.webp'
    },
    {
      title: 'Pretty TypeScript Errors',
      externallink: 'https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors',
      description: 'Human-readable TypeScript error messages with actionable insights',
      cover: '/images/devtools/pretty-typescript-errors.webp'
    }
  ],
  'Linter-Formatter': [
    {
      title: 'Biome',
      externallink: 'https://biomejs.dev',
      internallink: '/software/biome',
      description: 'Unified toolchain for linting, formatting, and more with Rust performance',
      cover: '/images/devtools/biome.webp'
    },
    {
      title: 'Oxlint',
      externallink: 'https://oxc-project.github.io',
      internallink: '/software/oxlint',
      description: 'Blazing fast JavaScript linter powered by Rust',
      cover: '/images/devtools/oxlint.webp'
    },
    {
      title: 'dprint',
      externallink: 'https://dprint.dev',
      internallink: '/software/dprint',
      description: 'Pluggable and configurable code formatting platform',
      cover: '/images/devtools/dprint.webp'
    },
    {
      title: 'ESLint',
      externallink: 'https://eslint.org',
      internallink: '/software/eslint',
      description: 'Highly configurable JavaScript/TypeScript linter',
      cover: '/images/devtools/eslint.webp'
    },
    {
      title: 'Knip',
      externallink: 'https://knip.dev',
      internallink: '/software/knip',
      description: 'Powerful tool for finding unused files, dependencies, and exports',
      cover: '/images/devtools/knip.webp'
    }
  ],
  'Code-Management': [
    {
      title: 'Turborepo',
      externallink: 'https://turbo.build/repo',
      internallink: '/software/turborepo',
      description: 'High-performance build system for JavaScript/TypeScript monorepos',
      cover: '/images/devtools/turborepo.webp'
    },
    {
      title: 'GitHub',
      externallink: 'https://github.com',
      internallink: '/software/github',
      description: 'Platform for version control and collaborative software development',
      cover: '/images/devtools/github.webp'
    }
  ],
  'Knowledge-Resources': [
    {
      title: 'DeepGraph',
      externallink: 'https://www.deepgraph.co',
      description: 'Knowledge graph visualization tool',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755439918/learn-wrikka-com/aniafuyjw2wtimxlh2ro.webp'
    },
    {
      title: 'DeepWiki',
      externallink: 'https://deepwiki.com',
      description: 'A wiki for developers',
      cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1755439783/learn-wrikka-com/oi0yrgz2nhyurywmvboq.webp'
    }
  ]
}
