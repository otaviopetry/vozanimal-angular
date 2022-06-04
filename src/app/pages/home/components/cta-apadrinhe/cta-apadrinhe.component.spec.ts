import { getMockStore, MockStore } from '@ngrx/store/testing';
import { CtaApadrinheComponent } from 'src/app/pages/home/components/cta-apadrinhe/cta-apadrinhe.component';

describe('[Unit] - CtaApadrinheComponent', (): void => {
    let component: CtaApadrinheComponent;

    const mockStore: MockStore = getMockStore();

    beforeEach((): void => {
        spyOn(mockStore, 'select');

        component = new CtaApadrinheComponent(
            mockStore,
        );
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });

    it('should call store select', (): void => {
        expect(mockStore.select).toHaveBeenCalled();
    });
});
