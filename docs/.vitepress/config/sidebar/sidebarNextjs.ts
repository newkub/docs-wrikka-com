import type { DefaultTheme } from "vitepress";

export default function sidebarNextjs(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Development",
			collapsed: false,
			base: "/software/nextjs/development",
			items: [
				{ text: "Create Next.js Project", link: "/create-project" },
				{ text: "Tooling", link: "/tooling" },
				{ text: "Build Caching", link: "/build-caching" },
				{ text: "Linting && Formatting", link: "/linting-formatting" },
				{ text: "TypeScript", link: "/typescript" },
				{ text: "Environment Mode", link: "/env-mode" },
				{ text: "Testing", link: "/testing" },
				{ text: "Projects Structure", link: "/project-structure" },
				{ text: "Error Handling", link: "/error-handling" },
			],
		},
		{
			text: "Frontend",
			collapsed: false,
			base: "/software/nextjs/frontend",
			items: [
				{
					text: "Client and Server Components",
					link: "/client-and-server-components",
				},
				{ text: "Routing", link: "/routing" },
				{ text: "Rendering", link: "/rendering" },
				{ text: "Styling", link: "/styling" },
				{ text: "State Management", link: "/state-management" },
				{
					text: "Data Fetching & Streaming",
					link: "/data-fetching-and-streaming",
				},
				{ text: "Caching and Revalidating", link: "/caching-and-revalidating" },
				{ text: "Metadata and OG images", link: "/metadata-and-og-images" },
			],
		},
		{
			text: "Backend (Server)",
			collapsed: false,
			base: "/software/nextjs/backend",
			items: [
				{ text: "API Routes", link: "/api-routes" },
				{ text: "Middleware", link: "/middleware" },
				{ text: "Server Function", link: "/server-function" },
			],
		},
		{
			text: "Production",
			collapsed: false,
			base: "/software/nextjs/production",
			items: [
				{ text: "Optimizing", link: "/optimizing" },
				{ text: "Deployment", link: "/deployment" },
				{ text: "Environment Variables", link: "/env" },
			],
		},

		{
			text: "APIs",
			collapsed: false,
			base: "/software/nextjs/apis",
			items: [
				{ text: "Directive", link: "/directive" },
				{ text: "File Conventions", link: "/file-conventions" },
				{ text: "Components", link: "/components" },
				{ text: "Functions", link: "/functions" },
				{ text: "next-config-js", link: "/next-config-js" },
				{ text: "Next CLI", link: "/next-cli" },
				{ text: "Edge Runtime", link: "/edge-runtime" },
			],
		},
	];
}
