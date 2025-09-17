import type { DefaultTheme } from "vitepress";

export default function sidebarResources(): DefaultTheme.SidebarItem[] {
	return [
		//{ text: "Bookmarks", link: "https://raindrop.io/new/" },
		{ text: "Codes", link: "/software/resources/codes" },
		{ text: "Videos", link: "/software/resources/videos" },
		//{ text: "Images", link: "/software/resources/images" },
		//{ text: "Tools", link: "/software/resources/tools" },
	];
}
