import { HomeComponent } from 'src/app/pages/home/home.component';

describe('[Unit] - HomeComponent', (): void => {
    let component: HomeComponent;

    beforeEach((): void => {
        component = new HomeComponent();
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
