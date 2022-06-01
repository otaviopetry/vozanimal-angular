import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';

export interface IPageRequest {
    [index: number]: IPageData;
}
