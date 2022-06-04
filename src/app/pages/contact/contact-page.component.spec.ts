import { ContactPageComponent } from "src/app/pages/contact/contact-page.component";

describe('[Unit] - ContactPageComponent', (): void => {
    let component: ContactPageComponent;

    beforeEach((): void => {
        component = new ContactPageComponent();
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
