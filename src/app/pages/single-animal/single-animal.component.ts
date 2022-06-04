import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AnimalSelectors } from 'src/app/infra/store/animal';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';

@Component({
    selector: 'va-single-animal',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './single-animal.component.html',
    styleUrls: ['./single-animal.component.scss'],
})
export class SingleAnimalPageComponent {
    public animalPage$: Observable<IPageData | null> = of();

    constructor(
        protected store: Store,
    ) {
        this.animalPage$ = this.store.select(AnimalSelectors.selectAnimal('bombachinha'));
    }
}
