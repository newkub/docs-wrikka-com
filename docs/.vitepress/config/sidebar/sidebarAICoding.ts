import type { DefaultTheme } from "vitepress";

export default function sidebarAICoding(): DefaultTheme.SidebarItem[] {
	return [
		{ text: "⚡Summarize", link: "/software/ai-coding/summarize" },

		{
			text: "Guide",
			collapsed: false,
			base: "/software/ai-coding/guide",
			items: [
				{ text: "AI Tools", link: "/ai-tools" },
				{ text: "Models", link: "/models" },
				{ text: "Recommended", link: "/recommended" },
				//{ text: "AI in Real Life (Windsurf)", link: "/ai-in-real-life" },
			],
		},
		{
			text: ".windsurfrules or .cursorrules",
			collapsed: false,
			base: "/software/ai-coding/ai-rules",
			items: [{ text: "Global Rules", link: "/global-rules" }],
		},
		/*
		{
			text: "Windsurf",
			collapsed: false,
			base: "/software/ai-coding/windsurf",
			items: [
				{ text: "How to Use", link: "/how-to-use" },
				{ text: "Prompts", link: "/prompts" },
				{ text: "Rules", link: "/rules" },
				{ text: "Videos", link: "/videos" },
			],
		},*/

		{
			text: "Tooling",
			collapsed: false,
			base: "/software/ai-coding/tooling",
			items: [
				{ text: "Windsurf (⚡แนะนำ)", link: "/windsurf" },
				{ text: "Cline & Roocode", link: "/cline-roocode" },
				{ text: "RooCode", link: "/roocode" },
				{ text: "Continue", link: "/continue" },
				//{ text: "VSCode Copilot", link: "/vscode-copilot" },
				{ text: "V0", link: "/v0" },
				{ text: "Bolt", link: "/bolt" },
				{ text: "Loveable", link: "/loveable" },
				{ text: "Codex", link: "/codex" },
				{
					text: "Claude Code",
					link: "/claude-code",
				},
			],
		},
	];
}
