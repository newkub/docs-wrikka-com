import type { DefaultTheme } from "vitepress";

export default function sidebarTailwindCSS(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Get Started",
			collapsed: false,
			base: "/software/tailwindcss/get-started",
			items: [
				{ text: "Introduction", link: "/introduction" },
				{ text: "Tooling", link: "/tooling" },
			],
		},
		{
			text: "Guide",
			collapsed: false,
			base: "/software/tailwindcss/guide",
			items: [
				{ text: "Quick Start", link: "/quick-start" },
				{ text: "tailwind.config.js", link: "/tailwind-config" },
				{
					text: "Utility Class",
					link: "/utility-class",
				},

				{
					text: "Hover, Focus, and Other States",
					link: "/hover-focus-and-other-states",
				},
				{ text: "Responsive", link: "/responsive" },
				{ text: "Dark Mode", link: "/dark-mode" },
				{ text: "Theme Variables", link: "/theme-variables" },
				{ text: "Adding Custom Styles", link: "/adding-custom-styles" },
				{
					text: "Functions & Directives",
					link: "/functions-and-directives",
				},
			],
		},
	];
}
