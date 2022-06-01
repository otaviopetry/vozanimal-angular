import { CtaAdoteComponent } from 'src/app/pages/home/components/cta-adote/cta-adote.component';
import { LoadPageService } from 'src/app/services/load-page/load-page.service';

describe('[Unit] - CtaAdoteComponent', (): void => {
    let component: CtaAdoteComponent;

    let loadPageServiceSpy: jasmine.SpyObj<LoadPageService>;

    beforeEach((): void => {
        loadPageServiceSpy = jasmine.createSpyObj(
            'LoadPageService',
            ['loadPageBySlug']
        );
        component = new CtaAdoteComponent(
            loadPageServiceSpy,
        );
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });

    it('should call LoadPageService and request the correct page by slug', (): void => {
        expect(loadPageServiceSpy.loadPageBySlug).toHaveBeenCalledWith('adote');
    });
});
