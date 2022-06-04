import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'va-animal',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './animal.component.html',
    styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent {
    constructor(
        protected store: Store,
    ) {
        //
    }
}
