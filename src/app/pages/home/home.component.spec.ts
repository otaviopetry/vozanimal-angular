import { getMockStore, MockStore } from '@ngrx/store/testing';
import { HomePageComponent } from 'src/app/pages/home/home-page.component';

describe('[Unit] - HomePageComponent', (): void => {
    let component: HomePageComponent;

    const mockStore: MockStore = getMockStore();

    beforeEach((): void => {
        component = new HomePageComponent(mockStore);
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
