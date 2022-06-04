import { AdoptionPageComponent } from "src/app/pages/adoption/adoption-page.component";

describe('[Unit] - AdoptionPageComponent', (): void => {
    let component: AdoptionPageComponent;

    beforeEach((): void => {
        component = new AdoptionPageComponent();
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
