import { Action } from "@ngrx/store";
import { AnimalActions, AnimalReducer } from "src/app/infra/store/animal";
import { IAnimalsPagesState } from "src/app/infra/store/animal/interfaces/animals-state.interface";
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

            const action: Action = AnimalActions.saveAnimals({
                animals: mockedAnimalsPagesBatch,
            });

            expect(AnimalReducer.reducer({ } as IAnimalsPagesState, action)).toEqual({
                animals: mockedAnimalsPagesBatch,
            });
        });
    });
});
