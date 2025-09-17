import type { DefaultTheme } from "vitepress";

export default function sidebarDevSetup(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Terminal",
			collapsed: false,
			base: "/software/dev-setup/terminal",
			items: [
				{ text: "Terminal in IDE", link: "/terminal-in-ide" },
				{ text: "WezTerm", link: "/wezterm" },
				{ text: "Windows Terminal", link: "/windows-terminal" },
			],
		},

		{
			text: "Shell",
			collapsed: false,
			base: "/software/dev-setup/shell",
			items: [
				{ text: "Powershell", link: "/powershell" },
				//{ text: "Bash", link: "/bash" },
				{
					text: "Customize",
					collapsed: true,
					base: "/software/dev-setup/shell/customize",
					items: [{ text: "Starship", link: "/starship" }],
				},
			],
		},
		{
			text: "IDE & Text Editor",
			collapsed: false,
			base: "/software/dev-setup/ide-text-editor",
			items: [
				{ text: "IDE", link: "/ide" },
				{ text: "Neovim", link: "/neovim" },
				{ text: "StackBlitz", link: "/stackblitz" },
			],
		},

		{
			text: "Program",
			collapsed: false,
			base: "/software/dev-setup/program",
			items: [
				{ text: "CLI Program", link: "/cli-program" },
				{
					text: "Windows Program",
					link: "/windows-program",
				},
				{
					text: "Browser Extensions",
					link: "/browser-extensions",
				},
			],
		},
	];
}
