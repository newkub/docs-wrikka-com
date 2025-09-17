import type { DefaultTheme } from "vitepress";

export default function sidebarNuxt(): DefaultTheme.SidebarItem[] {
	return [
		{ text: "⚡Summarize", link: "/software/nuxt/summarize" },
		{
			text: "Introduction",
			collapsed: false,
			base: "/software/nuxt/introduction",
			items: [
				{ text: "Nuxt vs Vue", link: "/nuxt-vs-vue" },
				{ text: "Introduction", link: "/introduction" },
				{ text: "Key Concepts", link: "/key-concepts" },
			],
		},

		{
			text: "Development",
			collapsed: false,
			base: "/software/nuxt/basic/development",
			items: [
				{ text: "Create Project", link: "/create-project" },
				{ text: "Projects Structure", link: "/project-structure" },
				{ text: "nuxt.config.ts", link: "/nuxt-config-ts" },
				{ text: "CLI", link: "/cli" },

				{ text: "@nuxt/kit", link: "/nuxt-kit" },
				{ text: "Error Handling", link: "/error-handling" },
				{ text: "Build Caching", link: "/build-caching" },
				{ text: "Linting && Formatting", link: "/linting-formatting" },
				{ text: "TypeScript", link: "/typescript" },
				{ text: "Environment Mode", link: "/environment-mode" },
			],
		},

		{
			text: "Frontend",
			collapsed: false,
			base: "/software/nuxt/basic/frontend",
			items: [
				{ text: "Routing", link: "/routing" },
				{ text: "Views", link: "/views" },
				{ text: "Rendering Mode", link: "/rendering-mode" },
				{ text: "Styling", link: "/styling" },
				{ text: "Assets", link: "/assets" },
				{ text: "State Management", link: "/state-management" },
				{ text: "Page Transitions", link: "/page-transitions" },
				{ text: "SEO and Meta", link: "/seo-and-meta" },
				{ text: "Data Fetching", link: "/data-fetching" },
			],
		},
		{
			text: "Backend (Server)",
			collapsed: false,
			base: "/software/nuxt/basic/backend",
			items: [
				{ text: "Server", link: "/server" },
				{ text: "Middleware", link: "/middleware" },
			],
		},
		{
			text: "Scaling",
			collapsed: false,
			base: "/software/nuxt/basic/scaling",
			items: [
				{ text: "Layers", link: "/layers" },
				{ text: "Testing", link: "/testing" },
			],
		},

		{
			text: "Production",
			collapsed: false,
			base: "/software/nuxt/basic/production",
			items: [
				{ text: "Optimizing", link: "/optimizing" },
				{ text: "Environment Variables", link: "/environment-variables" },
				{ text: "Prerendering", link: "/prerendering" },
				{ text: "Deployment", link: "/deployment" },
			],
		},

		{
			text: "APIs",
			collapsed: false,
			base: "/software/nuxt/apis",
			items: [
				{ text: "Components", link: "/components" },
				{ text: "Composables", link: "/composables" },
				{ text: "Utils", link: "/utils" },
				{ text: "CLI", link: "/cli" },
				{ text: "Advanced", link: "/advanced" },
				{ text: "nuxt.config.ts", link: "/nuxt-config-ts" },
			],
		},
	];
}
