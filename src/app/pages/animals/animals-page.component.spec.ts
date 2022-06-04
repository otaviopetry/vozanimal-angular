import { getMockStore, MockStore } from '@ngrx/store/testing';
import { AnimalsPageComponent } from 'src/app/pages/animals/animals-page.component';

describe('[Unit] - AnimalsPageComponent', (): void => {
    let component: AnimalsPageComponent;

    const mockStore: MockStore = getMockStore();

    beforeEach((): void => {
        component = new AnimalsPageComponent(mockStore);
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
