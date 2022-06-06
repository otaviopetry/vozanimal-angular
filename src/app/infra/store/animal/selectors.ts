import { createSelector } from "@ngrx/store";
import { AnimalReducer } from "src/app/infra/store/animal";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";

export const selectAnimal = (animalSlug: string) => createSelector(
    AnimalReducer.animalsFeature.selectAnimals,
    (animals: IPageData[]): IPageData | null => {
        const animal: IPageData | undefined = animals.find((animal: IPageData): boolean => animal.slug === animalSlug);

        if (!animal) {
            return null;
        }

        return animal;
    },
);
