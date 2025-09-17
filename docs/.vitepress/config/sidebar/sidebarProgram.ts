import type { DefaultTheme } from "vitepress";

export default function sidebarProductivity(): DefaultTheme.SidebarItem[] {
	return [
		{ text: "Browser Extensions", link: "/software/program/browser-extensions" },
		{ text: "Windows Program", link: "/software/program/windows-program" },
	];
}
