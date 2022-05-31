import { CtaApadrinheComponent } from 'src/app/pages/home/components/cta-apadrinhe/cta-apadrinhe.component';
import { CtaQuemSomosComponent } from 'src/app/pages/home/components/cta-quem-somos/cta-quem-somos.component';

describe('[Unit] - CtaApadrinheComponent', (): void => {
    let component: CtaQuemSomosComponent;

    beforeEach((): void => {
        component = new CtaApadrinheComponent();
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
