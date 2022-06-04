import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { concatMap, map, Observable } from "rxjs";
import { AnimalActions } from "src/app/infra/store/animal";
import { MainPagesActions } from "src/app/infra/store/main-pages";
import { IPageData } from "src/app/services/load-page/interfaces/page-data.interface";
import { LoadPageService } from "src/app/services/load-page/load-page.service";

@Injectable()
export class LoadPagesEffects {
    handleLoadPage$ = createEffect(
        (): Observable<Action> => { return this.actions$.pipe(
            ofType(MainPagesActions.loadPage),
            concatMap(({ slug }): Observable<Action> => {
                return this.loadPageService.loadPageBySlug(slug).pipe(
                    map((pageRequestResponse: IPageData[]): Action => {
                        return MainPagesActions.savePage({
                            pageData: pageRequestResponse[0],
                        });
                    }),
                );
            })
        );},
        { dispatch: true, useEffectsErrorHandler: true },
    );

    handleLoadAnimals$ = createEffect(
        (): Observable<Action> => { return this.actions$.pipe(
            ofType(AnimalActions.loadAnimals),
            concatMap((): Observable<Action> => {
                const animalsPerRequest: number = 30;

                return this.loadPageService.loadPagesByParentSlug(
                    'animais',
                    animalsPerRequest,
                ).pipe(
                    map((pageRequestResponse: IPageData[]): Action => {
                        return AnimalActions.saveAnimals({
                            animals: pageRequestResponse,
                        });
                    }),
                );
            }),
        );},
        { dispatch: true, useEffectsErrorHandler: true },
    );

    constructor(
        protected actions$: Actions,
        protected loadPageService: LoadPageService,
    ) {
        //
    }
}
