import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SiteData } from 'src/app/domain/site-data';
import { IPageRequest } from 'src/app/services/load-page/interfaces/page-request.interface';
import { LoadPageService } from 'src/app/services/load-page/load-page.service';

@Component({
    selector: 'va-cta-apadrinhe',
    templateUrl: './cta-apadrinhe.component.html',
    styleUrls: ['./cta-apadrinhe.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaApadrinheComponent {
    public pageData$: Observable<IPageRequest> = of();

    constructor(protected loadPageService: LoadPageService) {
        this.pageData$ = this.loadPageService.loadPageBySlug(
            SiteData.SLUG_APADRINHE
        );
    }
}
