import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AnimalActions, AnimalSelectors } from 'src/app/infra/store/animal';
import { IPageData } from 'src/app/services/load-page/interfaces/page-data.interface';

@Component({
    selector: 'va-animals',
    templateUrl: './animals-page.component.html',
    styleUrls: ['./animals-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalsPageComponent implements OnInit {
    public animals$: Observable<IPageData[]> = of();

    constructor(
        protected store: Store,
    ) {
        //
    }

    ngOnInit(): void {
        this.store.dispatch(AnimalActions.loadAnimals());
        this.animals$ = this.store.select(AnimalSelectors.selectAnimals);
    }
}
