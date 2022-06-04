interface IPageContent {
    rendered: string;
}

export interface IPageData {
    id: number;
    slug: string;
    title: IPageContent;
    content: IPageContent;
    excerpt: IPageContent;
}
