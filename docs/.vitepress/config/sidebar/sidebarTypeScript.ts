import type { DefaultTheme } from "vitepress";

export default function sidebarTypeScript(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Introduction",
			collapsed: false,
			base: "/software/typescript/introduction",
			items: [
				{
					text: "Why TypeScript",
					link: "/why-typescript",
				},
				{
					text: "How TypeScript Working",
					link: "/how-typescript-working",
				},
			],
		},

		{
			text: "Get Started",
			collapsed: false,
			base: "/software/typescript/get-started",
			items: [
				{ text: "Setup Project with TypeScript", link: "/setup-ts-project" },
				{ text: "TypeScript Libraries", link: "/typescript-libraries" },
			],
		},
		{
			text: "Guide",
			collapsed: false,
			base: "/software/typescript/guide",
			items: [
				{ text: "Type System", link: "/type-system" },
				{
					text: "Data Types",
					collapsed: false,
					base: "/software/typescript/data-types",
					items: [
						{ text: "Overview", link: "/overview" },
						{ text: "Primitive Types", link: "/primitive-types" },
						{ text: "Object Types", link: "/object-types" },
						{ text: "Collection Types", link: "/collection-types" },
						{ text: "Special Types", link: "/special-types" },
						{ text: "Complex Types", link: "/complex-types" },
					],
				},
				{
					text: "Type Manipulation",
					collapsed: false,
					base: "/software/typescript/type-manipulation",
					items: [
						{ text: "Generics", link: "/generics" },
						{ text: "Utility Types", link: "/utility-types" },
						{ text: "Mapped Types", link: "/mapped-types" },
						{ text: "Conditional Types", link: "/conditional-types" },
						{ text: "Template Literal Types", link: "/template-literal-types" },
						{ text: "Index Signatures", link: "/index-signatures" },
						{ text: "Advanced Types", link: "/advanced-types" },
					],
				},
				{
					text: "TypeScript Programming paradigms",
					collapsed: false,
					base: "/software/typescript/programming-paradigms",
					items: [
						{ text: "Overview", link: "/overview" },
						{ text: "TypeScript with OOP", link: "/typescript-with-oop" },
						{
							text: "TypeScript with Functional",
							link: "/typescript-with-functional",
						},
					],
				},
			],
		},
	];
}
