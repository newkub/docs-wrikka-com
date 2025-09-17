import type { DefaultTheme } from 'vitepress';

export interface SidebarConfig {
  [path: string]: {
    logo: string;
    items: DefaultTheme.SidebarItem[];
  };
}
