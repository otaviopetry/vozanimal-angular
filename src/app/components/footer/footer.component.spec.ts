import { FooterComponent } from 'src/app/components/footer/footer.component';

describe('[Unit] - FooterComponent', (): void => {
    let component: FooterComponent;

    beforeEach((): void => {
        component = new FooterComponent();
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
