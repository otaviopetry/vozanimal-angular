import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { SingleAnimalPageComponent } from 'src/app/pages/single-animal/single-animal.component';

describe('[Unit] - SingleAnimalPageComponent', (): void => {
    let component: SingleAnimalPageComponent;
    let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;

    beforeEach((): void => {
        activatedRouteSpy = jasmine.createSpyObj(
            'ActivatedRoute',
            [''],
            {
                data: of(),
            }
        );
        component = new SingleAnimalPageComponent(activatedRouteSpy);
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
