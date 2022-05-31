import { ApadrinheComponent } from 'src/app/pages/apadrinhe/apadrinhe.component';

describe('[Unit] - ApadrinheComponent', (): void => {
    let component: ApadrinheComponent;

    beforeEach((): void => {
        component = new ApadrinheComponent();
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
