import { Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { RunHelpers, TestScheduler } from "rxjs/testing";
import { LoadPagesEffects } from "src/app/effects/load-pages/load-pages.effects";
import { AnimalActions } from "src/app/infra/store/animal";
import { MainPagesActions } from "src/app/infra/store/main-pages";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";
import { LoadPageService } from "src/app/services/load-page/load-page.service";

describe('[Unit] - MainPagesEffects', (): void => {
    let loadPageServiceSpy: jasmine.SpyObj<LoadPageService>;

    let testScheduler: TestScheduler;

    function getEffects(actions$: Actions): LoadPagesEffects {
        return new LoadPagesEffects(
            actions$,
            loadPageServiceSpy
        );
    }

    beforeEach((): void => {
        loadPageServiceSpy = jasmine.createSpyObj(
            'LoadPageService',
            [
                'loadPageBySlug',
                'loadPagesByParentSlug',
            ],
        );
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    describe('handleLoadPage$', (): void => {
        it('should call loadPageService loadPageBySlug method with the slug', (): void => {
            const mockedSlug: string = 'randomSlug';

            testScheduler.run(({ hot, expectObservable }: RunHelpers): void => {
                const actions = hot('a', {
                    a: MainPagesActions.loadPage({
                        slug: mockedSlug,
                    }),
                });

                const effects = getEffects(actions);

                expectObservable(effects.handleLoadPage$);
            });

            expect(loadPageServiceSpy.loadPageBySlug).toHaveBeenCalledWith(
                mockedSlug,
            );
        });

        it('should dispatch the savePage action with the request response', (): void => {
            const mockedPageData: IPageData = {
                id: 44,
                slug: 'randomSlug',
            } as IPageData;

            loadPageServiceSpy.loadPageBySlug.and.returnValue(of([
                mockedPageData,
            ]));

            testScheduler.run(({ hot, expectObservable }: RunHelpers): void => {
                const actions = hot('a', {
                    a: MainPagesActions.loadPage({
                        slug: 'anySlug',
                    }),
                });

                const effects = getEffects(actions);

                expectObservable(effects.handleLoadPage$).toBe('b', {
                    b: MainPagesActions.savePage({
                        pageData: mockedPageData,
                    })
                });
            });
        });
    });

    describe('handleLoadAnimals$', (): void => {
        it('should call the loadPageService and request 30 animals per page', (): void => {
            testScheduler.run(({ hot, expectObservable }: RunHelpers): void => {
                const actions = hot('a', {
                    a: AnimalActions.loadAnimals({ page: 2 }),
                });

                const effects = getEffects(actions);

                expectObservable(effects.handleLoadAnimals$);
            });

            expect(loadPageServiceSpy.loadPagesByParentSlug).toHaveBeenCalledWith(
                'animais',
                30,
                2,
            );
        });

        it('should dispatch the saveAnimals action with the request response', (): void => {
            const mockedAnimalsPagesBatch: IPageData[] = [
                {
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
                    },
                },
            ];

            loadPageServiceSpy.loadPagesByParentSlug.and.returnValue(of(mockedAnimalsPagesBatch));

            testScheduler.run(({ hot, expectObservable }: RunHelpers): void => {
                const actions = hot('a', {
                    a: AnimalActions.loadAnimals({ page: 1 }),
                });

                const effects = getEffects(actions);

                expectObservable(effects.handleLoadAnimals$).toBe('b', {
                    b: AnimalActions.saveAnimals({
                        animals: mockedAnimalsPagesBatch,
                    })
                });
            });
        });
    });
});
