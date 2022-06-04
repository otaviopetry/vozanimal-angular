import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'va-single-animal',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './single-animal.component.html',
    styleUrls: ['./single-animal.component.scss'],
})
export class SingleAnimalPageComponent {
    constructor(
        protected store: Store,
    ) {
        //
    }
}
