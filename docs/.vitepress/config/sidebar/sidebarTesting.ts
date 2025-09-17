import type { DefaultTheme } from "vitepress";

export default function sidebarTesting(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Guide",
			collapsed: false,
			base: "/software/testing/guide",
			items: [
				{ text: "Test Methodology", link: "/test-methodology" },
				{ text: "Unit Testing", link: "/unit-testing" },
				{ text: "Integration Testing", link: "/integration-testing" },
				{ text: "Frontend Testing", link: "/frontend-testing" },
				{ text: "Backend Testing", link: "/backend-testing" },
				{ text: "Performance Testing", link: "/performance-testing" },
				{ text: "Security Testing", link: "/security-testing" },
			],
		},
		{
			text: "Testing Tools",
			collapsed: false,
			base: "/software/testing/tools",
			items: [
				{ text: "Vitest", link: "/vitest" },
				{ text: "Playwright", link: "/playwright" },
				{ text: "Japa", link: "/japa" },
				{ text: "Storybook", link: "/storybook" },
			],
		},
	];
}
