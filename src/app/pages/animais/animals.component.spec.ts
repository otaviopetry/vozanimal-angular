import { getMockStore, MockStore } from '@ngrx/store/testing';
import { AnimalsComponent } from 'src/app/pages/animais/animals.component';

describe('[Unit] - AnimaisComponent', (): void => {
    let component: AnimalsComponent;

    const mockStore: MockStore = getMockStore();

    beforeEach((): void => {
        component = new AnimalsComponent(mockStore);
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
