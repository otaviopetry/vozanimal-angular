import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
