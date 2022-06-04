import { AboutUsComponent } from "src/app/pages/about-us/about-us.component";

describe('[Unit] - AboutUsComponent', (): void => {
    let component: AboutUsComponent;

    beforeEach((): void => {
        component = new AboutUsComponent();
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
