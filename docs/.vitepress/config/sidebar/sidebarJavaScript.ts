import type { DefaultTheme } from "vitepress";

export default function sidebarJavaScript(): DefaultTheme.SidebarItem[] {
	return [
		{ text: "Introduction", link: "/javascript/introduction" },
		{
			text: "JavaScript Basic",
			base: "/software/javascript/basic",
			collapsed: false,
			items: [
				{ text: "Usage JavaScript", link: "/usage" },
				{ text: "Variables & Assignment", link: "/variables" },
				{ text: "Data Types", link: "/data-types" },
				{ text: "Operators", link: "/operators" },
				{ text: "Scope", link: "/scope" },
				{ text: "Loops", link: "/loops" },
				{ text: "Conditionals", link: "/conditionals" },
				{ text: "Functions", link: "/functions" },
				{ text: "Data Structures", link: "/data-structures" },
				{ text: "Error Handling", link: "/error-handling" },
				{ text: "Naming convention", link: "/naming-convention" },
				{ text: "Modules", link: "/modules" },
				{ text: "ES6+ Features", link: "/es6-features" },
				{ text: "Web APIs", link: "/web-apis" },
				{ text: "Asynchronous", link: "/asynchronous" },
				{ text: "Debugging", link: "/debugging" },
			],
		},

		/*
		{
			text: "Advanced Topics",
			collapsed: false,
			items: [
				{
					text: "Using TypeScript with JavaScript",
					link: "/software/typescript",
				},
				{
					text: "Memory Management",
					link: "/software/memory-management",
				},
				{
					text: "Programming Paradigms",
					link: "/software/programming/paradigms",
				},
			],
		},*/
	];
}
