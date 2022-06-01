import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPageRequest } from 'src/app/services/load-page/interfaces/page-request.interface';
import { LoadPageService } from 'src/app/services/load-page/load-page.service';

@Component({
    selector: 'va-cta-adote',
    templateUrl: './cta-adote.component.html',
    styleUrls: ['./cta-adote.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaAdoteComponent {
    public pageData$: Observable<IPageRequest> = of();

    constructor(protected loadPageService: LoadPageService) {
        this.pageData$ = this.loadPageService.loadPageBySlug('adote');
    }
}
