import { CtaQuemSomosComponent } from 'src/app/pages/home/components/cta-quem-somos/cta-quem-somos.component';

describe('[Unit] - CtaApadrinheComponent', (): void => {
    let component: CtaQuemSomosComponent;

    beforeEach((): void => {
        component = new CtaQuemSomosComponent();
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
