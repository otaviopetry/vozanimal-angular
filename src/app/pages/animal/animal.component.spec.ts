import { AnimalComponent } from 'src/app/pages/animal/animal.component';

describe('[Unit] - AnimalComponent', (): void => {
    let component: AnimalComponent;

    beforeEach((): void => {
        component = new AnimalComponent();
    });

    it('should initialize the component', (): void => {
        expect(component).toBeDefined();
    });
});
