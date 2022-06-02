import { Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { RunHelpers, TestScheduler } from "rxjs/testing";
import { MainPagesEffects } from "src/app/effects/main-pages.effects";
import { MainPagesActions } from "src/app/infra/store/main-pages";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";
import { LoadPageService } from "src/app/services/load-page/load-page.service";

describe('[Unit] - MainPagesEffects', (): void => {
    let loadPageServiceSpy: jasmine.SpyObj<LoadPageService>;

    let testScheduler: TestScheduler;

    function getEffects(actions$: Actions): MainPagesEffects {
        return new MainPagesEffects(
            actions$,
            loadPageServiceSpy
        )
    }

    beforeEach((): void => {
        loadPageServiceSpy = jasmine.createSpyObj(
            'LoadPageService',
            ['loadPageBySlug'],
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
    })
});
