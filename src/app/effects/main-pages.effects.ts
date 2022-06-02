import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { concatMap, map, Observable, tap } from "rxjs";
import { SiteData } from "src/app/domain/site-data";
import { MainPagesActions } from "src/app/infra/store/main-pages";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";
import { LoadPageService } from "src/app/services/load-page/load-page.service";

@Injectable()
export class MainPagesEffects {
    handleLoadPage$ = createEffect(
        (): Observable<Action> => this.actions$.pipe(
            ofType(MainPagesActions.loadPage),
            concatMap(({ slug }): Observable<Action> => {
                console.log('===> effect');

                return this.loadPageService.loadPageBySlug(slug).pipe(
                    map((pageRequestResponse: IPageData[]): Action => {
                        return MainPagesActions.savePage({
                            pageData: pageRequestResponse[0],
                        })
                    })
                )
            })
        ),
        { dispatch: true, useEffectsErrorHandler: true },
    )

    constructor(
        protected actions$: Actions,
        protected loadPageService: LoadPageService,
    ) {
        //
    }
}
