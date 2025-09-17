import fs from "node:fs";
import { posix as path } from "node:path";
import type { Plugin } from "vite";
import type { DefaultTheme } from "vitepress";
import sidebarAPI from "../config/sidebar/sidebarAPI";
import sidebarAI from "../config/sidebar/sidebarAI";
import sidebarTools from "../config/sidebar/sidebarTools";

const SIDEBAR_FILES = [
	path.resolve(__dirname, "../config/sidebar/sidebarAPI.ts"),
	path.resolve(__dirname, "../config/sidebar/sidebarAI.ts"),
	path.resolve(__dirname, "../config/sidebar/sidebarTools.ts"),
];

function generateMarkdown(
	items: DefaultTheme.SidebarItem[],
	base = "",
): string {
	let markdown = "";

	for (const item of items) {
		const currentBase = item.base || base;

		if (item.items?.length) {
			// Group item
			markdown += `### ${item.text}\n\n`;
			for (const subItem of item.items) {
				if (subItem.link) {
					const relativeLink = subItem.link.startsWith("/")
						? subItem.link.substring(1)
						: subItem.link;
					const link = path.join(currentBase, relativeLink).replace(/\\/g, "/");
					markdown += `* [${subItem.text}](${link})\n`;
				}
			}
			markdown += "\n"; // Add space after the list
		} else if (item.link) {
			// Standalone item
			const link = item.link.startsWith("/") ? item.link : `/${item.link}`;
			markdown += `* [${item.text}](${link})\n`;
		}
	}
	return markdown;
}

function generateSolutionsFile() {
	console.log("Generating solutions.md...");

	const devContent = generateMarkdown(sidebarAPI());
	const aiContent = generateMarkdown(sidebarAI());
	const toolsContent = generateMarkdown(sidebarTools());

	const markdownContent = `# Solutions\n\n## Dev\n\n${devContent}\n## AI\n\n${aiContent}\n## Tools\n\n${toolsContent}`;

	// Fix: Use correct output path relative to project root
	const outputPath = path.join(process.cwd(), "courses", "solutions.md");

	// Ensure directory exists before writing
	fs.mkdirSync(path.dirname(outputPath), { recursive: true });

	fs.writeFileSync(outputPath, markdownContent, "utf-8");
	console.log(`✅ Successfully generated: ${outputPath}`);
}

export default function generateSolutionsPage(): Plugin {
	return {
		name: "vite-plugin-generate-solutions",
		buildStart() {
			generateSolutionsFile();
		},
		handleHotUpdate({ file }) {
			if (SIDEBAR_FILES.includes(file)) {
				generateSolutionsFile();
				return []; // No need to reload the page
			}
		},
	};
}
