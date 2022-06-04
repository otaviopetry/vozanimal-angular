import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { concatMap, map, Observable } from 'rxjs';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class LoadPageService {
    constructor(
        protected httpClient: HttpClient,
        protected store: Store,
    ) {
        //
    }

    public loadPageBySlug(slug: string): Observable<IPageData[]> {
        const endpoint: string = `${ environment.apiUrl }pages?slug=${ slug }`;

        return this.httpClient.get<IPageData[]>(endpoint);
    }

    public loadPagesByParentSlug(
        slug: string,
        perPage: number = 10,
    ): Observable<IPageData[]> {
        return this.loadPageBySlug(slug).pipe(
            concatMap((pageRequest: IPageData[]): Observable<IPageData[]> => {
                const parentId: number = pageRequest[0].id;
                const endpoint: string =
                    `${ environment.apiUrl }pages?parent=${ parentId }&per_page=${ perPage }&orderby=title&order=asc`;

                return this.httpClient.get<IPageData[]>(endpoint).pipe(
                    map((pageRequest: IPageData[]): IPageData[] => {
                        return pageRequest;
                    })
                );
            })
        );
    }
}
