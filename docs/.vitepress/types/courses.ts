export interface Course {
	title: string;
	internalLink?: string;
	externalLink?: string;
	image?: string;
	cover?: string;
	description: string;
	category: "CSS" | "HTML" | "frontend";
}
