import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'va-animal',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './animal.component.html',
    styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent {
    //
}