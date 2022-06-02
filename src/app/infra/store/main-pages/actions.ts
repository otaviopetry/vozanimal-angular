import { createAction, props } from '@ngrx/store';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';

enum Actions {
    SAVE_PAGE = '[Main Pages] - Save Page',
}

export const savePage = createAction(
    Actions.SAVE_PAGE,
    props<{ pageData: IPageData }>()
);
