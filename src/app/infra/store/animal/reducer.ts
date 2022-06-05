import { createFeature, createReducer, on } from "@ngrx/store";
import { AnimalActions } from "src/app/infra/store/animal";
import { IAnimalsState } from "src/app/infra/store/animal/interfaces/animals-state.interface";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";

const animalsInitialState: IAnimalsState = {
    animals: [],
};

export const animalsFeature = createFeature({
    name: 'animals',
    reducer: createReducer(
        animalsInitialState,
        on(
            AnimalActions.saveAnimals,
            (
                state: IAnimalsState | { },
                { animals }: { animals: IPageData[] },
            ): IAnimalsState => {
                return {
                    ...state,
                    animals
                };
            },
        ),
    ),
});
