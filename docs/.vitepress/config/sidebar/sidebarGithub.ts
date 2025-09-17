import type { DefaultTheme } from "vitepress";

export default function sidebarGithub(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Profile",
			collapsed: false,
			base: "/software/github/profile",
			items: [
				{ text: "Customize Github Profile", link: "/customize-github-profile" },
			],
		},
		{
			text: "Repository",
			collapsed: false,
			base: "/software/github/repo",
			items: [
				{ text: "Local <-> Github", link: "/local-github" },
				{ text: "Repository", link: "/repository" },
				{ text: "Code", link: "/code" },
				{ text: "Issue", link: "/issue" },
				{ text: "Pull requests", link: "/pull-requests" },
				{ text: "Discussion", link: "/discussion" },
				{ text: "Actions", link: "/actions" },
				{ text: "Projects", link: "/projects" },
				{ text: "Security", link: "/security" },
				{ text: "Insights", link: "/insights" },
				{ text: "Marketplace", link: "/marketplace" },
			],
		},
	];
}
