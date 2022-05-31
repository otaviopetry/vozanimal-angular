import { AppComponent } from 'src/app/app.component';

describe('[Unit] - AppComponent', (): void => {
    const component: AppComponent = new AppComponent();

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
