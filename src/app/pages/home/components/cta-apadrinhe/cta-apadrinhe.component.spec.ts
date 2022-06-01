import { SiteData } from 'src/app/domain/site-data';
import { CtaApadrinheComponent } from 'src/app/pages/home/components/cta-apadrinhe/cta-apadrinhe.component';
import { LoadPageService } from 'src/app/services/load-page/load-page.service';

describe('[Unit] - CtaApadrinheComponent', (): void => {
    let component: CtaApadrinheComponent;

    let loadPageServiceSpy: jasmine.SpyObj<LoadPageService>;

    beforeEach((): void => {
        loadPageServiceSpy = jasmine.createSpyObj('LoadPageService', [
            'loadPageBySlug',
        ]);
        component = new CtaApadrinheComponent(loadPageServiceSpy);
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });

    it('should call LoadPageService and request the correct page by slug', (): void => {
        expect(loadPageServiceSpy.loadPageBySlug).toHaveBeenCalledWith(
            SiteData.SLUG_APADRINHE
        );
    });
});
