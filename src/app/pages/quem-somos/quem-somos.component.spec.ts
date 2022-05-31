import { QuemSomosComponent } from "src/app/pages/quem-somos/quem-somos.component";

describe('[Unit] - QuemSomosComponent', (): void => {
  let component: QuemSomosComponent;

  beforeEach((): void => {
    component = new QuemSomosComponent();
  });

  it('should initialize the component', (): void => {
    expect(component).toBeDefined();
  });
});
