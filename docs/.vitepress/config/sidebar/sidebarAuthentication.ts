import type { DefaultTheme } from "vitepress";

export default function sidebarAuthentication(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Authentication",
			base: "/software/authentication/basic",
			items: [
				{ text: "Auth Workflow", link: "/auth-workflow" },
				{ text: "Auth Tokens", link: "/auth-tokens" },
				{ text: "Auth Method", link: "/auth-method" },
				{ text: "User Management", link: "/user-management" },
			],
		},
		{
			text: "User Management",
			base: "/software/authentication/user-management",
			items: [
				{ text: "Permission", link: "/permission" },
				{ text: "Access Control", link: "/access-control" },
			],
		},
		{
			text: "Auth Services",
			base: "/software/authentication/services",
			items: [
				{ text: "WorkOS vs Clerk", link: "/workos-vs-clerk" },
				{ text: "WorkOS", link: "/workos" },
				{ text: "Clerk", link: "/clerk" },
				/*
				{
					text: "Supabase Auth",
					link: "/supabase-auth",
				},*/
			],
		},
	];
}
