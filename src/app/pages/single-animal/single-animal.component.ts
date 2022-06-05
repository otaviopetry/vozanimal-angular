import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';

@Component({
    selector: 'va-single-animal',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './single-animal.component.html',
    styleUrls: ['./single-animal.component.scss'],
})
export class SingleAnimalPageComponent implements OnDestroy {
    public animalPage$: Observable<IPageData> = of();

    protected subscriptions: Subscription[] = [];

    constructor(
        protected activatedRoute: ActivatedRoute,
    ) {
        this.subscriptions.push(
            this.activatedRoute.data.subscribe(
                (data: any): void => {
                    if (!data.animal) {
                        return;
                    }

                    this.animalPage$ = of(data.animal[0]);
                }
            )
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(
            (subscription: Subscription): void => {
                subscription.unsubscribe();
            }
        );
        this.subscriptions = [];
    }
}
