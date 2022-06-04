import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainPagesState } from "src/app/infra/store/main-pages/interfaces/main-pages-state.interface";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";

const selectFeature = createFeatureSelector<IMainPagesState>('mainPages');

export const selectPage = (slug: string) => createSelector(
    selectFeature,
    (state: IMainPagesState): IPageData => {
        return state[slug];
    }
);
