import { AdoteComponent } from 'src/app/pages/adote/adote.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

describe('[Unit] - AdoteComponent', (): void => {
    let component: AdoteComponent;

    beforeEach((): void => {
        component = new AdoteComponent();
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
