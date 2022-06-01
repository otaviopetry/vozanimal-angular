interface IPageContent {
    rendered: string;
}

export interface IPageData {
    id: number;
    title: IPageContent;
    content: IPageContent;
    excerpt: IPageContent;
}
