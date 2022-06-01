import { SiteData } from 'src/app/domain/site-data';
import { CtaOutrasFormasComponent } from 'src/app/pages/home/components/cta-outras-formas/cta-outras-formas.component';
import { LoadPageService } from 'src/app/services/load-page/load-page.service';

describe('[Unit] - CtaOutrasFormasComponent', (): void => {
    let component: CtaOutrasFormasComponent;

    let loadPageServiceSpy: jasmine.SpyObj<LoadPageService>;

    beforeEach((): void => {
        loadPageServiceSpy = jasmine.createSpyObj('LoadPageService', [
            'loadPageBySlug',
        ]);
        component = new CtaOutrasFormasComponent(loadPageServiceSpy);
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });

    it('should call LoadPageService and request the correct page by slug', (): void => {
        expect(loadPageServiceSpy.loadPageBySlug).toHaveBeenCalledWith(
            SiteData.SLUG_OUTRAS_FORMAS
        );
    });
});
