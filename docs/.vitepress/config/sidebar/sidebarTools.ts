import type { DefaultTheme } from "vitepress";
import useTools from "../../theme/composables/useTools";

const { sidebarToolsItems } = useTools();

export default function sidebarTools(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Tools",
			collapsed: false,
			items: sidebarToolsItems.value,
		},
	];
}
