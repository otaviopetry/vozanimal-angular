import { getMockStore, MockStore } from '@ngrx/store/testing';
import { CtaOutrasFormasComponent } from 'src/app/pages/home/components/cta-outras-formas/cta-outras-formas.component';
import { LoadPageService } from 'src/app/services/load-page/load-page.service';

describe('[Unit] - CtaOutrasFormasComponent', (): void => {
    let component: CtaOutrasFormasComponent;
    let loadPageServiceSpy: jasmine.SpyObj<LoadPageService>;

    const mockStore: MockStore = getMockStore();

    beforeEach((): void => {
        spyOn(mockStore, 'select');

        loadPageServiceSpy = jasmine.createSpyObj('LoadPageService', [
            'loadPageBySlug',
            'loadPagesByParentSlug',
        ]);
        component = new CtaOutrasFormasComponent(
            mockStore,
            loadPageServiceSpy
        );
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });

    it('should call store select', (): void => {
        expect(mockStore.select).toHaveBeenCalled();
    });
});
