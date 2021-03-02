export class DiscussionItem {
    id: number;
    parent?: number;
    title: string;
    content: string;
    likes: number;
    views: number;
    replies: number;
    dateWritten: number;
    dateModified: number;
    creator: number;
}