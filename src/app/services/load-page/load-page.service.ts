import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, map, Observable } from 'rxjs';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';
import { IPageRequest } from 'src/app/services/load-page/interfaces/page-request.interface';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class LoadPageService {
    constructor(protected httpClient: HttpClient) {
        //
    }

    public loadPageBySlug(slug: string): Observable<IPageRequest> {
        const endpoint: string = `${environment.apiUrl}pages?slug=${slug}`;

        return this.httpClient.get<IPageRequest>(endpoint);
    }

    public loadPagesByParentSlug(slug: string): Observable<IPageData[]> {
        return this.loadPageBySlug(slug).pipe(
            concatMap((pageRequest: IPageRequest) => {
                const parentId: number = pageRequest[0].id;
                const endpoint: string = `${environment.apiUrl}pages?parent=${parentId}`;

                return this.httpClient.get<IPageData[]>(endpoint).pipe(
                    map((pageRequest: IPageData[]): IPageData[] => {
                        return [...pageRequest];
                    })
                );
            })
        );
    }
}
