import { createAction, props } from '@ngrx/store';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';

enum Actions {
    SAVE_PAGE = '[Main Pages] - Save Page',
    LOAD_PAGE = '[Main Pages] - Load Page',
}

export const savePage = createAction(
    Actions.SAVE_PAGE,
    props<{ pageData: IPageData }>()
);

export const loadPage = createAction(
    Actions.LOAD_PAGE,
    props<{ slug: string }>(),
);
