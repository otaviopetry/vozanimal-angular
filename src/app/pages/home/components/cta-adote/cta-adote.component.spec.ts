import { CtaAdoteComponent } from 'src/app/pages/home/components/cta-adote/cta-adote.component';

describe('[Unit] - CtaAdoteComponent', (): void => {
    let component: CtaAdoteComponent;

    beforeEach((): void => {
        component = new CtaAdoteComponent();
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
