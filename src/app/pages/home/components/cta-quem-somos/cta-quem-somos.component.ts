import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { SiteData } from 'src/app/domain/site-data';
import { MainPagesSelectors } from 'src/app/infra/store/main-pages';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';

@Component({
    selector: 'va-cta-quem-somos',
    templateUrl: './cta-quem-somos.component.html',
    styleUrls: ['./cta-quem-somos.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaQuemSomosComponent {
    public pageData$: Observable<IPageData> = of();

    constructor(protected store: Store) {
        this.pageData$ = this.store.select(
            MainPagesSelectors.selectPage(SiteData.SLUG_ABOUT_US),
        );
    }
}
