import type { DefaultTheme } from "vitepress";

export default function sidebarProjects(): DefaultTheme.SidebarItem[] {
	return [
		{ text: "All ", link: "/projects/all" },
		{
			text: "Coding",
			collapsed: true,
			base: "/projects/coding",
			items: [
				{
					text: "Workspace",
					link: "/workspace",
				},
				{
					text: "Write Code",
					link: "/write-code",
				},
				{
					text: "Solve Problems",
					link: "/solve-problems",
				},
			],
		},
		{
			text: "Planning",
			collapsed: true,
			base: "/projects/service-platform",
			items: [
				{
					text: "research",
					link: "/research",
				},
			],
		},
	];
}
