import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';
import { LoadPageService } from 'src/app/services/load-page/load-page.service';

@Injectable({ providedIn: 'root' })
export class SingleAnimalRouteResolver implements Resolve<IPageData[] | null> {
    constructor(
        protected loadPageService: LoadPageService,
    ) {
        //
    }

    resolve(route: ActivatedRouteSnapshot): Observable<IPageData[] | null> {
        const animal: string | null = route.paramMap.get('animal');

        if (animal === null) {
            return of(null);
        }

        return this.loadPageService.loadPageBySlug(animal);
    }
}
