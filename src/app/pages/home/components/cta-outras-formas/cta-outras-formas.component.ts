import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SiteData } from 'src/app/domain/site-data';
import { IPageRequest } from 'src/app/services/load-page/interfaces/page-request.interface';
import { LoadPageService } from 'src/app/services/load-page/load-page.service';

@Component({
    selector: 'va-cta-outras-formas',
    templateUrl: './cta-outras-formas.component.html',
    styleUrls: ['./cta-outras-formas.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaOutrasFormasComponent {
    public pageData$: Observable<IPageRequest> = of();
    public childPages$: Observable<IPageRequest> = of();

    constructor(protected loadPageService: LoadPageService) {
        this.pageData$ = this.loadPageService.loadPageBySlug(
            SiteData.SLUG_OUTRAS_FORMAS
        );
        this.loadPageService
            .loadPagesByParentSlug(SiteData.SLUG_OUTRAS_FORMAS)
            .subscribe((childPages: IPageRequest): void => {
                console.log('===> childPages', childPages);
            });
    }
}
