import { getMockStore, MockStore } from '@ngrx/store/testing';
import { AnimalComponent } from 'src/app/pages/animal/animal.component';

describe('[Unit] - AnimalComponent', (): void => {
    let component: AnimalComponent;

    const mockStore: MockStore = getMockStore();

    beforeEach((): void => {
        component = new AnimalComponent(mockStore);
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
