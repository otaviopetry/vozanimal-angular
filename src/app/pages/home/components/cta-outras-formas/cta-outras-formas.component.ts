import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { SiteData } from 'src/app/domain/site-data';
import { MainPagesSelectors } from 'src/app/infra/store/main-pages';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';
import { LoadPageService } from 'src/app/services/load-page/load-page.service';

@Component({
    selector: 'va-cta-outras-formas',
    templateUrl: './cta-outras-formas.component.html',
    styleUrls: ['./cta-outras-formas.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaOutrasFormasComponent {
    public pageData$: Observable<IPageData> = of();
    public childPages$: Observable<IPageData[]> = of();

    constructor(
        protected store: Store,
        protected loadPageService: LoadPageService,
    ) {
        this.pageData$ = this.store.select(
            MainPagesSelectors.selectPage(SiteData.SLUG_OUTRAS_FORMAS),
        );
        this.childPages$ = this.loadPageService.loadPagesByParentSlug(
            SiteData.SLUG_OUTRAS_FORMAS
        );
    }
}
