import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SiteData } from 'src/app/domain/site-data';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';
import { LoadPageService } from 'src/app/services/load-page/load-page.service';

@Component({
    selector: 'va-cta-adote',
    templateUrl: './cta-adote.component.html',
    styleUrls: ['./cta-adote.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaAdoteComponent {
    public pageData$: Observable<IPageData[]> = of();

    constructor(protected loadPageService: LoadPageService) {
        this.pageData$ = this.loadPageService.loadPageBySlug(
            SiteData.SLUG_ADOTE
        );
    }
}
