import { getMockStore, MockStore } from '@ngrx/store/testing';
import { HomeComponent } from 'src/app/pages/home/home.component';

describe('[Unit] - HomeComponent', (): void => {
    let component: HomeComponent;

    const mockStore: MockStore = getMockStore();

    beforeEach((): void => {
        component = new HomeComponent(mockStore);
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
