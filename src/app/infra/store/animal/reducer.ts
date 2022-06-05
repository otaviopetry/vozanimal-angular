import { createFeature, createReducer, on } from "@ngrx/store";
import { AnimalActions } from "src/app/infra/store/animal";
import { IAnimalsPagesState } from "src/app/infra/store/animal/interfaces/animals-state.interface";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";

interface AnimalsState {
    animals: IPageData[];
}

const animalsInitialState: AnimalsState = {
    animals: [],
};

export const animalsFeature = createFeature({
    name: 'animals',
    reducer: createReducer(
        animalsInitialState,
        on(
            AnimalActions.saveAnimals,
            (
                state: IAnimalsPagesState | { },
                { animals }: { animals: IPageData[] },
            ): IAnimalsPagesState => {
                return {
                    ...state,
                    animals
                };
            },
        ),
    ),
});
