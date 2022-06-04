import { getMockStore, MockStore } from '@ngrx/store/testing';
import { AnimaisComponent } from 'src/app/pages/animais/animais.component';

describe('[Unit] - AnimaisComponent', (): void => {
    let component: AnimaisComponent;

    const mockStore: MockStore = getMockStore();

    beforeEach((): void => {
        component = new AnimaisComponent(mockStore);
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
