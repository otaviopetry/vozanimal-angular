import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { SiteData } from 'src/app/domain/site-data';
import { MainPagesSelectors } from 'src/app/infra/store/main-pages';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';

@Component({
    selector: 'va-cta-adote',
    templateUrl: './cta-adote.component.html',
    styleUrls: ['./cta-adote.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaAdoteComponent {
    public pageData$: Observable<IPageData> = of();

    constructor(
        protected store: Store,
    ) {
        this.pageData$ = this.store.select(
            MainPagesSelectors.selectPage(SiteData.SLUG_ADOPTION),
        );
    }
}
