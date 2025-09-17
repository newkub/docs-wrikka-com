import type { DefaultTheme } from "vitepress";

export default function sidebarRefactoring(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Fundamentals",
			base: "/software/refactoring/fundamental",
			collapsed: false,
			items: [
				{
					text: "What is Refactoring?",
					link: "/what-is-refactoring",
				},
				{ text: "When to Refactor", link: "/when-to-refactor" },
				{ text: "Code Smells", link: "/code-smells" },
			],
		},
		{
			text: "Techniques",
			base: "/software/refactoring/techniques",
			collapsed: false,
			items: [
				{ text: "Extract Method", link: "/extract-method" },
				{ text: "Rename Variable", link: "/rename-variable" },
				{ text: "Move Method", link: "/move-method" },
				{
					text: "Replace Conditional with Polymorphism",
					link: "/replace-conditional-with-polymorphism",
				},
			],
		},
		{
			text: "Advanced Topics",
			base: "/software/refactoring/advanced",
			collapsed: false,
			items: [
				{
					text: "Refactoring to Patterns",
					link: "/refactoring-to-patterns",
				},
				{
					text: "Legacy Code Refactoring",
					link: "/legacy-code-refactoring",
				},
				{ text: "Database Refactoring", link: "/database-refactoring" },
			],
		},
		{
			text: "Tools and Practices",
			base: "/software/refactoring/tools",
			collapsed: false,
			items: [
				{ text: "Refactoring IDEs", link: "/refactoring-ides" },
				{
					text: "Version Control Best Practices",
					link: "/version-control-best-practices",
				},
				{ text: "Automated Refactoring", link: "/automated-refactoring" },
			],
		},
		{
			text: "Case Studies",
			base: "/software/refactoring/case-studies",
			collapsed: false,
			items: [
				{
					text: "Real-world Refactoring Examples",
					link: "/real-world-examples",
				},
				{
					text: "Before and After Comparisons",
					link: "/before-after-comparisons",
				},
			],
		},
	];
}
