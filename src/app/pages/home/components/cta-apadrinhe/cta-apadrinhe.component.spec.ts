import { CtaApadrinheComponent } from 'src/app/pages/home/components/cta-apadrinhe/cta-apadrinhe.component';

describe('[Unit] - CtaApadrinheComponent', (): void => {
    let component: CtaApadrinheComponent;

    beforeEach((): void => {
        component = new CtaApadrinheComponent();
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
