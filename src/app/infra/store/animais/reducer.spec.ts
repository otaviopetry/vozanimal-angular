import { Action } from "@ngrx/store";
import { AnimalsActions, AnimalsReducer } from "src/app/infra/store/animais";
import { IAnimalsPagesState } from "src/app/infra/store/animais/interfaces/animals-state.interface";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";

describe('[Unit] - AnimalsReducer', (): void => {
    describe('saveAnimals', (): void => {
        it('save the animals page batch on redux', (): void => {
            const mockedAnimalPage: IPageData = {
                id: 55,
                content: {
                    rendered: 'random words',
                },
                excerpt: {
                    rendered: 'random words',
                },
                slug: 'random words',
                title: {
                    rendered: 'random words'
                }
            };
            const mockedAnimalsPagesBatch: IPageData[] = [mockedAnimalPage];

            const action: Action = AnimalsActions.saveAnimals({
                animals: mockedAnimalsPagesBatch,
            });

            expect(AnimalsReducer.reducer({ } as IAnimalsPagesState, action)).toEqual({
                animals: mockedAnimalsPagesBatch,
            });
        });
    });
});
