import { Action, createReducer, on } from '@ngrx/store';
import { MainPagesActions } from 'src/app/infra/store/main-pages';
import { IMainPagesState } from 'src/app/infra/store/main-pages/interfaces/main-pages-state.interface';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';

const mainPagesReducer = createReducer(
    { },
    on(MainPagesActions.savePage, (
        state: IMainPagesState,
        { pageData }: { pageData: IPageData },
    ): IMainPagesState => {
        return {
            ...state,
            [pageData.slug]: pageData,
        };
    }),
);

export function reducer(
    state: IMainPagesState,
    action: Action,
) {
    return mainPagesReducer(state, action);
}
