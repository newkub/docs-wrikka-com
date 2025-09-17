import type { DefaultTheme } from "vitepress";
import useContent from "../../theme/composables/useContent";

const { sidebarSoftwareDevItems } = useContent();

export default function sidebarSoftwareDevelopment(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Software Development",
			collapsed: false,
			items: sidebarSoftwareDevItems.value,
		},
	];
}
