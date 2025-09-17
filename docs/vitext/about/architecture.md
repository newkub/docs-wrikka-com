# Vite1xt Architecture Overview

## Core Architecture
- **Hybrid Rendering**: Combines SSR (Server-Side Rendering) and SSG (Static Site Generation)
- **File-based Routing**: Automatic route handling based on file structure
- **Build System**: Utilizes Vite for fast development builds and optimized production output

## Key Components
- **Page Pipeline**: 
  - Request handling flow
  - Dynamic route resolution
- **Caching Layer**: 
  - In-memory cache for SSR
  - Disk-based cache for SSG