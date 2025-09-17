import type { DefaultTheme } from "vitepress";

export default function sidebarNodejs(): DefaultTheme.SidebarItem[] {
	return [
		{ text: "⚡Summarize", link: "/software/nodejs/summarize" },

		{
			text: "Get Started",
			base: "/software/nodejs/get-started",
			collapsed: false,
			items: [
				{ text: "Introduction", link: "/introduction" },
				{ text: "Install Node.js", link: "/installation" },
				{ text: "Node.js vs Bun", link: "/node-vs-bun" },
			],
		},

		{
			text: "Guide",
			base: "/software/nodejs/guide",
			collapsed: false,
			items: [
				{
					text: "Setup Project with Node.js",
					link: "/setup-project-with-node",
				},
				{ text: "Package Manager", link: "/package-manager" },
				{ text: "package.json", link: "/package-json" },
				{ text: "Modules", link: "/modules" },
				{ text: "Libraries", link: "/libraries" },
				{ text: "Env", link: "/env" },
				{ text: "Built-in Modules", link: "/built-in-modules" },
			],
		},
	];
}
