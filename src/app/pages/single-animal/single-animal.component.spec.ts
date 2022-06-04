import { getMockStore, MockStore } from '@ngrx/store/testing';
import { SingleAnimalPageComponent } from 'src/app/pages/single-animal/single-animal.component';

describe('[Unit] - SingleAnimalPageComponent', (): void => {
    let component: SingleAnimalPageComponent;

    const mockStore: MockStore = getMockStore();

    beforeEach((): void => {
        component = new SingleAnimalPageComponent(mockStore);
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
