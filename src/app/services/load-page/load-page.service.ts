import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface IPageContent {
    rendered: string;
}

export interface IPageData {
    id: number;
    title: IPageContent;
    content: IPageContent;
    excerpt: IPageContent;
}

export interface IPageRequest {
    [index: number]: IPageData;
}

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
