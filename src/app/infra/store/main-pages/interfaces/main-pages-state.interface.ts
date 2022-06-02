import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";

export interface IMainPagesState {
    [slug: string]: IPageData;
}
