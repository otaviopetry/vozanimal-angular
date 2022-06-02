import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SiteData } from 'src/app/domain/site-data';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';
import { LoadPageService } from 'src/app/services/load-page/load-page.service';

@Component({
    selector: 'va-cta-quem-somos',
    templateUrl: './cta-quem-somos.component.html',
    styleUrls: ['./cta-quem-somos.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaQuemSomosComponent {
    public pageData$: Observable<IPageData[]> = of();

    constructor(protected loadPageService: LoadPageService) {
        this.pageData$ = this.loadPageService.loadPageBySlug(
            SiteData.SLUG_QUEM_SOMOS
        );
    }
}
