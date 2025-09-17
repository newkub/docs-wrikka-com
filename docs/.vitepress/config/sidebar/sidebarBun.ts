import type { DefaultTheme } from "vitepress";

export default function sidebarBun(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Get Started",
			collapsed: false,
			base: "/software/bun/get-started",
			items: [
				{ text: "Quick Start", link: "/quick-start" },
				{ text: "Migration from NodeJS", link: "/migration-from-nodejs" },
				{ text: "Bun Package Manager", link: "/bun-package-manager" },
				{ text: "Usage", link: "/usage" },
				{ text: "bunfig.toml", link: "/bunfig-toml" },
			],
		},

		{
			text: "Runtime",
			collapsed: false,
			base: "/software/bun/runtime",
			items: [
				{ text: "File Types", link: "/file-types" },
				{ text: "TypeScript", link: "/typescript" },
				{ text: "JSX", link: "/jsx" },
				{ text: "ENV", link: "/env" },
				{ text: "Bun APIs", link: "/bun-apis" },
				{ text: "Web APIs", link: "/web-apis" },
				{ text: "Node.js compatibility", link: "/node-compatibility" },
				{ text: "Single-file executable", link: "/single-file-executable" },
				{ text: "Plugins", link: "/plugins" },
				{ text: "Watch Mode", link: "/watch-mode" },
				{ text: "Modules resolution", link: "/modules-resolution" },
				{ text: "Auto Install", link: "/auto-install" },
				{ text: "bunfig.toml", link: "/bunfig-toml" },
				{ text: "Debugger", link: "/debugger" },
				{ text: "Framework API", link: "/framework-api" },
			],
		},
		{
			text: "Bundler",
			collapsed: false,
			base: "/software/bun/bundler",
			items: [
				{ text: "bun.build", link: "/bun-buil" },
				{ text: "Loaders", link: "/loaders" },
				{ text: "Plugins", link: "/plugins" },
				{ text: "Macros", link: "/macros" },
			],
		},
	];
}
