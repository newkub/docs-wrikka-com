import type { DefaultTheme } from "vitepress";

export default function sidebarAPI(): DefaultTheme.SidebarItem[] {
	return [
		{ text: "What is APIs", link: "/what-is-apis" },
		{ text: "Type of APIs", link: "/type-of-apis" },
		{
			text: "RESTfull API (for Web)",
			collapsed: false,
			base: "/software/api/restfull",
			link: "/index",
			items: [
				{ text: "Fetch API", link: "/fetch-api" },
				{ text: "Create API Endpoint", link: "/create-api-endpoint" },
				{ text: "Create API Docs", link: "/create-api-docs" },
				{ text: "Testing API", link: "/testing-api" },
				{ text: "Mock API", link: "/mock-api" },
			],
		},
		{
			text: "API Services",
			collapsed: false,
			base: "/software/api/services",
			link: "/index",
			items: [{ text: "Zuplo", link: "/zuplo" }],
		},
	];
}
