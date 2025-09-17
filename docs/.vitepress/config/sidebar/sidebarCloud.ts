import type { DefaultTheme } from "vitepress";

export default function sidebarCloud(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "Cloud 101",
			collapsed: false,
			base: "/software/cloud/cloud101",
			items: [
				{ text: "Type of Cloud", link: "/type-of-cloud" },
				{ text: "Cloud Services", link: "/cloud-services" },
				{ text: "Cloud Computing", link: "/cloud-computing" },
				{ text: "Pricing Models", link: "/pricing-models" },
			],
		},
		{
			text: "CI/CD",
			collapsed: false,
			base: "/software/devops/ci-cd",
			items: [
				{ text: "Repositories", link: "/repositories" },
				{ text: "CI Workflow", link: "/ci-workflow" },
				{ text: "Collaboration", link: "/collaboration" },
			],
		},
		{
			text: "Cloud Services",
			collapsed: false,
			base: "/software/cloud/cloud",
			items: [
				{ text: "Domain", link: "/domain" },
				{ text: "Deployment", link: "/deployment" },
				{ text: "Database", link: "/database" },
				{ text: "Storage", link: "/storage" },
				{ text: "Authentication", link: "/authentication" },
				{ text: "Monitoring", link: "/monitoring" },
				{ text: "Serverless", link: "/serverless" },
				{ text: "CDN", link: "/cdn" },
				{ text: "AI Services", link: "/ai-services" },
				{ text: "Containers", link: "/containers" },
				{ text: "App Platform", link: "/app-platform" },
			],
		},
		{
			text: "Cloud Providers",
			collapsed: false,
			base: "/software/cloud/prividers",
			items: [
				{ text: "Vercel", link: "/vercel" },
				{ text: "NuxtHub", link: "/nuxthub" },
				{ text: "Cloudflare Pages ", link: "/cloudflare-pages" },
				{ text: "Railway", link: "/railway" },
			],
		},

		/*
		{
			text: "Domain",
			collapsed: false,
			base: "/software/cloud/domain",
			items: [{ text: "Cloudflare Domain", link: "/cloudflare-domain" }],
		},*/
		/*
		{
			text: "Deployment",
			collapsed: false,
			base: "/software/cloud/deployment",
			items: [
				{
					text: "Serverless",
					collapsed: false,
					base: "/software/cloud/deployment/serverless",
					items: [
						{ text: "Overview", link: "" },
						{ text: "Vercel", link: "/vercel" },
						{ text: "NuxtHub", link: "/nuxthub" },
						{ text: "Cloudflare Pages", link: "/cloudflare-pages" },
						{ text: "Wasmer", link: "/wasmer" },
						{ text: "Railway", link: "/railway" },
					],
				},
				{
					text: "Container",
					collapsed: false,
					base: "/software/cloud/deployment/container",
					items: [
						{ text: "Railway", link: "/railway" },
					],
				},
			],
		},*/

		/*
		{
			text: "Deployment Frameworks",
			collapsed: false,
			base: "/software/deployment/framework",
			items: [
				
				{ text: "SST", link: "/sst" },
				{ text: "Nitro", link: "/nitro" },
			],
		},*/
	];
}
