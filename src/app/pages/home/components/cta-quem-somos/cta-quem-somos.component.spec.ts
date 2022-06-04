import { getMockStore, MockStore } from '@ngrx/store/testing';
import { CtaQuemSomosComponent } from 'src/app/pages/home/components/cta-quem-somos/cta-quem-somos.component';

describe('[Unit] - CtaQuemSomosComponent', (): void => {
    let component: CtaQuemSomosComponent;

    const mockStore: MockStore = getMockStore();

    beforeEach((): void => {
        spyOn(mockStore, 'select');

        component = new CtaQuemSomosComponent(mockStore);
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });

    it('should call store select', (): void => {
        expect(mockStore.select).toHaveBeenCalled();
    });
});
