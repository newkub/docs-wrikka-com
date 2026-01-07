import type { Theme } from 'vitepress'
import DefaultTheme from "vitepress/theme";
import { Sandbox } from "vitepress-plugin-sandpack";
import "vitepress-plugin-sandpack/dist/style.css";
import { createMediumZoomProvider } from "./composables/useMediumZoom";
import CustomLayout from "./layouts/custom-layout.vue";
import "./assets/styles/index.css";
import "./assets/styles/nav-badge.css";
import "uno.css";
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import "virtual:group-icons.css";
import 'vitepress-plugin-codeblocks-fold/style/index.css';


const themeConfig = {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component("Sandbox", Sandbox);
    (ctx.app as any).use(TwoslashFloatingVue as any);
    createMediumZoomProvider(ctx.app as any, ctx.router);

  },
} as Theme

export default themeConfig
