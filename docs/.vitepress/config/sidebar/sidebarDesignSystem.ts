import type { DefaultTheme } from "vitepress";

export default function sidebarDesignSystem(): DefaultTheme.SidebarItem[] {
	return [
		{ text: "สิ่งที่จะได้เรียนรู้", link: "/projects/design-system/what-will-learn" },

		/*
		{ text: "Explore", link: "/software/design-system/explorer" },
		{
			text: "Create Design System",
			collapsed: false,
			base: "/software/design-system/create-design-syste",
			items: [
				{ text: "Overview", link: "" },
				{ text: "Tokens", link: "/tokens" },
				{ text: "UI", link: "/ui" },
				{ text: "Docs", link: "/docs" },
				{ text: "Visualize", link: "/visualize" },
			],
		},*/
	];
}
