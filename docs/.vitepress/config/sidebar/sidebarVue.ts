import type { DefaultTheme } from "vitepress";

export default function sidebarVue(): DefaultTheme.SidebarItem[] {
	return [
		{ text: "⚡Summarize", link: "/software/vue/summarize" },
		/*
		{
			text: "Introduction",
			collapsed: false,
			base: "/software/vue/introduction",
			items: [
				{ text: "Vue vs React", link: "/vue-vs-react" },
				{ text: "How Vue Working", link: "/how-vue-working" },
			],
		},*/
		{
			text: "Get Started",
			collapsed: false,
			base: "/software/vue/get-started",
			items: [
				{ text: "Setup Vue", link: "/setup-vue" },
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
			text: "Vue Basic Concepts",
			collapsed: false,
			base: "/software/vue/basic",
			items: [
				{ text: "Components", link: "/components" },
				{ text: "Lifecycle", link: "/lifecycle" },
				{ text: "Styling", link: "/styling" },
				{ text: "Event	", link: "/event" },
				{ text: "Rendering", link: "/rendering" },
				{ text: "State", link: "/state" },
			],
		},
		{
			text: "Vue for Scaling",
			collapsed: false,
			base: "/software/vue/advanced",
			items: [
				{ text: "Refactoring", link: "/refactoring" },
				{
					text: "Reuse Components (props, slot, emit)",
					link: "/reuse-components",
				},
				{ text: "Vue With TypeScript", link: "/vue-with-ts" },
				{ text: "Improve Performance", link: "/vue-perf" },
				{ text: "Error Handling", link: "/vue-error-handling" },
			],
		},

		{
			text: "APIs",
			collapsed: false,
			base: "/software/vue/api",
			items: [
				{ text: "Global", link: "/global" },
				{ text: "SFC", link: "/sfc" },
				{ text: "Built-ins", link: "/built-ins" },
				{ text: "Composition API", link: "/composition" },
				{ text: "Advanced", link: "/advanced" },
			],
		},
	];
}
