// https://vitepress.dev/guide/custom-theme

import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { Sandbox } from "vitepress-plugin-sandpack";
import "vitepress-plugin-sandpack/dist/style.css";
import { createMediumZoomProvider } from "./composables/useMediumZoom";
import CustomLayout from "./layouts/CustomLayout.vue";
import "./styles/index.css";
import "uno.css";
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";
import "@unocss/reset/tailwind-compat.css";
import "@shikijs/vitepress-twoslash/style.css";
import "virtual:group-icons.css";

export default {
	...DefaultTheme,
	Layout: CustomLayout,
	enhanceApp(ctx) {
		DefaultTheme.enhanceApp(ctx);
		ctx.app.component("Sandbox", Sandbox);
		ctx.app.use(TwoslashFloatingVue);
		createMediumZoomProvider(ctx.app, ctx.router);
	},
} satisfies Theme;
