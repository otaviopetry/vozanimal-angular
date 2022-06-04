import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAnimalsPagesState } from "src/app/infra/store/animal/interfaces/animals-state.interface";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";

const selectFeature = createFeatureSelector<IAnimalsPagesState>('animals');

export const selectAnimals = createSelector(
    selectFeature,
    (state: IAnimalsPagesState): IPageData[] => {
        return state.animals;
    }
)
