export interface VideoSource {
	src: string;
	type: string;
}

export interface VideoTranscript {
	/** เวลาเป็นวินาที */
	timestamp: number;
	/** ข้อความคำบรรยาย */
	text: string;
	/** ความยาวช่วงเวลานี้ (วินาที) - optional */
	duration?: number;
}

export interface VideoItem {
	id: string | number;
	title: string;
	description: string;
	thumbnail: string;
	duration: string;
	youtubeId?: string;
	transcript?: VideoTranscript[];
}

export interface PlaylistItem {
	id: string | number;
	title: string;
	description: string;
	thumbnail: string;
	duration: string;
	isLocked?: boolean;
	isNew?: boolean;
	customData?: Record<string, unknown>;
}

export interface Comment {
	id: string | number;
	author: string;
	avatar: string;
	content: string;
	timestamp: string;
	likes: number;
	isLiked: boolean;
	isEdited?: boolean;
	isPinned?: boolean;
	replies?: Comment[];
}

export interface VideoResource {
	id: string | number;
	title: string;
	type: "pdf" | "link" | "file";
	url: string;
	size?: string;
}
