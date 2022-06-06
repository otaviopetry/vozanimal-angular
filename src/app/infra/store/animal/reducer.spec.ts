import { Action } from "@ngrx/store";
import { AnimalActions } from "src/app/infra/store/animal";
import { IAnimalsState } from "src/app/infra/store/animal/interfaces/animals-state.interface";
import { animalsFeature } from "src/app/infra/store/animal/reducer";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";

describe('[Unit] - AnimalsReducer', (): void => {
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
    const mockedInitialState: IAnimalsState = {
        animals: [mockedAnimalPage],
    };

    describe('saveAnimals', (): void => {
        it('save the animals page batch on redux', (): void => {
            const anotherMockedAnimalPage: IPageData = {
                id: 66,
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

            const action: Action = AnimalActions.saveAnimals({
                animals: [anotherMockedAnimalPage],
            });

            expect(animalsFeature.reducer(mockedInitialState, action)).toEqual({
                animals: [
                    mockedAnimalPage,
                    anotherMockedAnimalPage,
                ],
            });
        });
    });
});
