import { getMockStore, MockStore } from '@ngrx/store/testing';
import { CtaAdoteComponent } from 'src/app/pages/home/components/cta-adote/cta-adote.component';

describe('[Unit] - CtaAdoteComponent', (): void => {
    let component: CtaAdoteComponent;

    const mockStore: MockStore = getMockStore();

    beforeEach((): void => {
        spyOn(mockStore, 'select');

        component = new CtaAdoteComponent(mockStore);
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });

    it('should call store select', (): void => {
        expect(mockStore.select).toHaveBeenCalled();
    });
});
