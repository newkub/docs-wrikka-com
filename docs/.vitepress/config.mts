import type { ShikiTransformer } from "@shikijs/types";
import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import { type DefaultTheme, defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { externalLinksPlugin } from "./markdown-plugins/external-links";
import { nav } from "./config/nav";
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { Sidebar } from "./theme/sidebar";
import container from 'markdown-it-container';
import { renderSandbox } from 'vitepress-plugin-sandpack';

export default withMermaid(
	defineConfig({
		sitemap: {
			hostname: "https://learn.wrikka.com",
		},
		appearance: "dark",
		title: "Wrikka Learn",
		titleTemplate: "Wrikka Learn",
		description: "Wrikka Learn",
		head: [
			["link", { rel: "icon", href: "/favicon.svg", type: "image/webp+xml" }],
			["meta", { name: "author", content: "wrikka" }],
			["meta", { property: "og:type", content: "/og.webp" }],
			["meta", { name: "og:title", content: "learn.wrikka.com" }],
			[
				"meta",
				{ name: "og:description", content: "คอร์สเรียนทั้งหมด: แชร์สิ่งที่รียนรู้ในทุกๆวัน" },
			],
			[
				"script",
				{
					src: "//code.tidio.co/f4xtk1yekdnq5ynr6c51geiws1cmrhod.js",
				},
			],
		],
		lang: "th-TH",
		base: "/",
		cleanUrls: true,
		srcDir: ".",
		srcExclude: ["**/README.md", "**/TODO.md"],
		ignoreDeadLinks: true,
		lastUpdated: true,
		themeConfig: {
			darkModeSwitchTitle: "Dark mode",
			docFooter: {
				next: "Next",
				prev: "Previous",
			},
			darkModeSwitchLabel: "Dark mode",
			outline: {
				level: [2, 3],
				label: "On this page",
			},
			logo: "/favicon.svg",
			/*
			algolia: {
				appId: 'import.meta.env.VITE_ALGOLIA_APP_ID',
				apiKey: 'import.meta.env.VITE_ALGOLIA_API_KEY',
				indexName: 'vitepress',
				placeholder: 'Search',
				searchParameters: {
					hitsPerPage: 10,
					attributesToRetrieve: ['hierarchy', 'content', 'anchor', 'url'],
					attributesToSnippet: ['content:10']
				},
				locales: {
					root: {
						placeholder: 'Search',
						translations: {
							button: {
								buttonText: 'Search'
							}
						}
					}
				}
			},*/
			editLink: {
				pattern: "https://github.com/kowork/kowork/edit/main/docs/:path",
			},
			carbonAds: {
				code: "your-carbon-code",
				placement: "your-carbon-placement",
			},
			socialLinks: [
				{ icon: "github", link: "https://github.com/kowork/kowork" },
				{ icon: "x", link: "https://x.com/kowork" },
				{ icon: "github", link: "https://github.com/kowork/kowork" },
				{ icon: "npm", link: "https://www.npmjs.com/package/@kowork/components" },
			],
			nav: nav,
			sidebar: Sidebar as DefaultTheme.Sidebar,
		},
		markdown: {
			math: true,
			codeTransformers: [transformerTwoslash({}) as ShikiTransformer],
			image: {
				lazyLoading: true,
			},
			config(md) {
				md.use(groupIconMdPlugin);
				md.use(externalLinksPlugin);
				md.use(container, 'sandbox', {
					render(tokens, idx) {
						return renderSandbox(tokens, idx, 'sandbox');
					},
				});
			},
		},
	}),
);
