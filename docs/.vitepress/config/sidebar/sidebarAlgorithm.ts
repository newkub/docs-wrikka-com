import type { DefaultTheme } from "vitepress";

export default function sidebarAlgorithm(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Guide",
			collapsed: false,
			link: "/overview",
			base: "/software/algorithm/guide",
			items: [
				{ text: "Data Structure", link: "/data-structure" },
				{
					text: "Algorithms",
					collapsed: false,
					link: "/algorithms",
					base: "/software/algorithm/algorithms",
					items: [
						{ text: "All Algorithms", link: "/all-algorithms" },
						{ text: "Sorting", link: "/sorting" },
						{ text: "Searching", link: "/searching" },
						{ text: "Recursion", link: "/recursion" },
						{ text: "Dynamic Programming", link: "/dynamic-programming" },
					],
				},
			],
		},
	];
}
