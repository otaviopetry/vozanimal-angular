import { SponsoringPageComponent } from "src/app/pages/sponsoring/sponsoring-page.component";

describe('[Unit] - SponsoringPageComponent', (): void => {
    let component: SponsoringPageComponent;

    beforeEach((): void => {
        component = new SponsoringPageComponent();
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
