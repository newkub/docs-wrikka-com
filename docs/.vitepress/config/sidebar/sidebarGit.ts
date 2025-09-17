import type { DefaultTheme } from "vitepress";

export default function sidebarGit(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Introduction",
			collapsed: false,
			base: "/software/git/introduction",
			items: [
				{ text: "Git and Version Control", link: "/git-and-version-control" },
				{ text: "Benefit of Git", link: "/benefit-of-git" },
			],
		},
		{
			text: "Get Started",
			collapsed: false,
			base: "/software/git/get-started",
			items: [
				{ text: "Installation", link: "/installation" },
				{ text: ".gitconfig", link: "/git-config" },
				{ text: "Tooling", link: "/tooling" },
			],
		},
		{
			text: "Guide",
			collapsed: false,
			base: "/software/git/guide",
			items: [
				{ text: "Quick Start", link: "/quick-start" },
				{ text: "Core Concepts", link: "/core-concepts" },
				{ text: "File", link: "/file" },
				{ text: "Commit", link: "/commit" },
				{ text: "Branch", link: "/branch" },
				{ text: "Remote", link: "/remote" },
				{ text: "Advanced", link: "/advanced" },
				{ text: "Release", link: "/release" },
				{ text: "History", link: "/history" },
				{ text: "Debuging", link: "/debugging" },
				{ text: "Cleanup", link: "/cleanup" },
			],
		},
	];
}
