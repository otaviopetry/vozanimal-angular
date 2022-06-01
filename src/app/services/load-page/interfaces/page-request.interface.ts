interface IPageContent {
    rendered: string;
}

interface IPageData {
    id: number;
    title: IPageContent;
    content: IPageContent;
    excerpt: IPageContent;
}

export interface IPageRequest {
    [index: number]: IPageData;
}
