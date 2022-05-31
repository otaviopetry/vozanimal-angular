import { HeaderComponent } from 'src/app/components/header/header.component';

describe('[Unit] - HeaderComponent', (): void => {
    let component: HeaderComponent;

    beforeEach((): void => {
        component = new HeaderComponent();
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
