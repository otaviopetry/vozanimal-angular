import { Action } from "@ngrx/store"
import { MainPagesActions, MainPagesReducer } from "src/app/infra/store/main-pages"
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface"

describe('[Unit] - MainPagesReducer', (): void => {
    describe('savePage', (): void => {
        it('should save the page data on redux using slug as key', (): void => {
            const mockedPageData: IPageData = {
                id: 55,
                slug: 'randomWord',
            } as IPageData;
            const action: Action = MainPagesActions.savePage({
                pageData: mockedPageData
            });

            expect(MainPagesReducer.reducer({ }, action)).toEqual({
                'randomWord': mockedPageData,
            })
        })
    })
})
