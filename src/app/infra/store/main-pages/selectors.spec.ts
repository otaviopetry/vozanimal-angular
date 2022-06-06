import { MainPagesSelectors } from "src/app/infra/store/main-pages";
import { IMainPagesState } from "src/app/infra/store/main-pages/interfaces/main-pages-state.interface";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";

describe('[Unit] - MainPagesSelectors', (): void => {
    describe('selectPage', (): void => {
        it('should return a page from redux by slug', (): void => {
            const mockedSlug: string = 'some-slug';
            const mockedPageData: IPageData = {
                id: 55,
                content: {
                    rendered: 'random words',
                },
                excerpt: {
                    rendered: 'random words',
                },
                slug: mockedSlug,
                title: {
                    rendered: 'random words'
                }
            };
            const mockedInitialState: IMainPagesState = {
                [mockedSlug]: mockedPageData,
            };

            const page: IPageData = MainPagesSelectors.selectPage(
                mockedSlug
            ).projector(
                mockedInitialState
            );

            expect(page).toEqual(mockedPageData);
        });
    });
});
