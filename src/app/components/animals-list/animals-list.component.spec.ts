import { getMockStore, MockStore } from '@ngrx/store/testing';
import { AnimalsListComponent } from 'src/app/components/animals-list/animals-list.component';

describe('[Unit] - AnimalsPageComponent', (): void => {
    let component: AnimalsListComponent;

    const mockStore: MockStore = getMockStore();

    beforeEach((): void => {
        component = new AnimalsListComponent(mockStore);
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
