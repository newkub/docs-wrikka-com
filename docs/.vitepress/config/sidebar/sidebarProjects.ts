import type { DefaultTheme } from "vitepress";

export default function sidebarProjects(): DefaultTheme.SidebarItem[] {
	return [
		/*
		{
			text: "Framer Template",
			collapsed: true,
			base: "/projects/framer-template",
			items: [
				{
					text: "Overview",
					link: "",
				},
			],
		},*/

		{
			text: "useAI",
			collapsed: true,
			base: "/software/projects/useai",
			items: [
				{
					text: "Overview",
					link: "",
				},
			],
		},

		{
			text: "AuthUI",
			collapsed: true,
			base: "/software/projects/authui",
			items: [
				{
					text: "Overview",
					link: "",
				},
			],
		},
		{
			text: "Template Starter",
			collapsed: true,
			base: "/software/projects/template-starter",
			items: [
				{
					text: "Overview",
					link: "",
				},
			],
		},
		{
			text: "Git Interactive CLI",
			collapsed: true,
			base: "/software/projects/git-interactive-cli",
			items: [
				{
					text: "Overview",
					link: "",
				},
			],
		},
		{
			text: "Services Platform",
			collapsed: true,
			base: "/software/projects/services-platform",
			items: [
				{
					text: "Overview",
					link: "",
				},
			],
		},
	];
}
