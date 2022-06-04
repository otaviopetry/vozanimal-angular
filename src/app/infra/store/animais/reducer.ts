import { Action, createReducer, on } from "@ngrx/store";
import { AnimalsActions } from "src/app/infra/store/animais";
import { IAnimalsPagesState } from "src/app/infra/store/animais/interfaces/animals-state.interface";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";

const animalsPageReducer = createReducer(
    { },
    on(
        AnimalsActions.saveAnimals,
        (
            state: IAnimalsPagesState | { },
            { animals }: { animals: IPageData[] },
        ): IAnimalsPagesState => {
            return {
                ...state,
                animals
            }
        },
    ),
);

export function reducer(
    state: IAnimalsPagesState,
    action: Action,
) {
    return animalsPageReducer(state, action);
}


