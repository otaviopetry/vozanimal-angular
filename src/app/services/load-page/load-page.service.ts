import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface IPageContent {
    rendered: string;
}

interface IPageData {
    id: number;
    title: string;
    content: IPageContent;
    excerpt: IPageContent;
}

@Injectable({
    providedIn: 'root',
})
export class LoadPageService {
    constructor(protected httpClient: HttpClient) {
        //
    }

    public loadPageBySlug(slug: string): Observable<IPageData> {
        const endpoint: string = `${environment.apiUrl}/pages?slug=${slug}`;

        return this.httpClient.get<IPageData>(endpoint);
    }
}
