import { SiteData } from 'src/app/domain/site-data';
import { CtaQuemSomosComponent } from 'src/app/pages/home/components/cta-quem-somos/cta-quem-somos.component';
import { LoadPageService } from 'src/app/services/load-page/load-page.service';

describe('[Unit] - CtaQuemSomosComponent', (): void => {
    let component: CtaQuemSomosComponent;

    let loadPageServiceSpy: jasmine.SpyObj<LoadPageService>;

    beforeEach((): void => {
        loadPageServiceSpy = jasmine.createSpyObj('LoadPageService', [
            'loadPageBySlug',
        ]);
        component = new CtaQuemSomosComponent(loadPageServiceSpy);
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });

    it('should call LoadPageService and request the correct page by slug', (): void => {
        expect(loadPageServiceSpy.loadPageBySlug).toHaveBeenCalledWith(
            SiteData.SLUG_QUEM_SOMOS
        );
    });
});
