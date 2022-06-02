import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SiteData } from 'src/app/domain/site-data';
import { MainPagesActions } from 'src/app/infra/store/main-pages';

@Component({
    selector: 'va-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'home.html',
    styleUrls: ['home.scss'],
})
export class HomeComponent implements OnInit {
    constructor(
        protected store: Store,
    ) {
        //
    }

    ngOnInit(): void {
        this.loadMainPages();
    }

    protected loadMainPages(): void {
        SiteData.MAIN_PAGES_SLUGS.forEach(
            (slug: string): void => {
                this.store.dispatch(MainPagesActions.loadPage({
                    slug,
                }));
            },
        );
    }
}
