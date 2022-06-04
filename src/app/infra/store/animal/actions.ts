import { createAction, props } from "@ngrx/store";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";

enum Actions {
    LOAD_ANIMALS = '[Animals] - Load Animals',
    SAVE_ANIMALS = '[Animais] - Save Animals',
    LOAD_SINGLE_ANIMAL = '[Animals] - Load Single Animal',
}

export const loadAnimals = createAction(
    Actions.LOAD_ANIMALS,
);

export const saveAnimals = createAction(
    Actions.SAVE_ANIMALS,
    props<{ animals: IPageData[] }>(),
);

export const loadAnimal = createAction(
    Actions.LOAD_SINGLE_ANIMAL,
    props<{ animal: string }>(),
);

