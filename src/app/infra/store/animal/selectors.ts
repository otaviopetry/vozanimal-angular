import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAnimalsPagesState } from "src/app/infra/store/animal/interfaces/animals-state.interface";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";

const selectFeature = createFeatureSelector<IAnimalsPagesState>('animals');

export const selectAnimals = createSelector(
    selectFeature,
    (state: IAnimalsPagesState): IPageData[] => {
        return state.animals;
    }
);

export const selectAnimal = (animalSlug: string) => createSelector(
    selectFeature,
    (state: IAnimalsPagesState): IPageData | null => {
        if (!state.animals) {
            return null;
        }

        const animalPage = state.animals.find((animal: IPageData): boolean => animal.slug === animalSlug);

        if (animalPage === undefined) {
            return null;
        }

        return animalPage;
    },
);

// fazer um selector com pipe?
