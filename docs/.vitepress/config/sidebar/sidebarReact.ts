import type { DefaultTheme } from "vitepress";

export default function sidebarReact(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Get Started",
			collapsed: false,
			base: "/software/react/get-started",
			items: [
				{ text: "Create React Project", link: "/create-project" },
				{ text: "Naming convention", link: "/naming-convention" },
				{ text: "Tooling", link: "/tooling" },
			],
		},
		{
			text: "Development",
			collapsed: false,
			base: "/software/react/development",
			items: [
				{ text: "Linting & Formatting", link: "/linting-formatting" },
				{ text: ".windsurfrules", link: "/windsurfrules" },
				{ text: "Best Practics", link: "/best-practics" },
			],
		},

		{
			text: "React Basic Concepts",
			collapsed: false,
			base: "/software/react/basics",
			items: [
				{ text: "Components", link: "/components" },
				{ text: "Lifecycle", link: "/lifecycle" },
				{ text: "Rendering", link: "/rendering" },
				{ text: "Styling", link: "/styling" },
				{ text: "Events", link: "/events" },
				{ text: "State", link: "/state" },
				{ text: "Functions", link: "/functions" },
			],
		},

		{
			text: "React for Scaling",
			collapsed: false,
			base: "/software/react/scaling",
			items: [
				{ text: "Refactoring", link: "/refactoring" },
				{
					text: "Reuse Components (props, children, callbacks)",
					link: "/reuse-components",
				},
				{ text: "React with TypeScript", link: "/react-with-ts" },
				{ text: "Improve Performance", link: "/improve-perf" },
				{ text: "Error Handling", link: "/error-handling" },
			],
		},

		{
			text: "APIs",
			collapsed: false,
			base: "/software/react/api",
			items: [
				{ text: "@react", link: "/react" },
				{ text: "@react-dom", link: "/react-dom" },
			],
		},
	];
}
