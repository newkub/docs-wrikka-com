import type { DefaultTheme } from "vitepress";

export default function sidebarAccount(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "บัญชี",
			base: "/account",
			items: [
				{ text: "ลงชื่อเข้าใช้", link: "/signin" },
				{ text: "ลงทะเบียน", link: "/signup" },
				{ text: "ลืมรหัสผ่าน", link: "/set-password" },
				{ text: "บิลการชำระเงิน", link: "/billing" },
				{ text: "แดชบอร์ด", link: "/dashboard" },
			],
		},
	];
}
