import { ContatoComponent } from "src/app/pages/contato/contato.component";

describe('[Unit] - ContatoComponent', (): void => {
  let component: ContatoComponent;

  beforeEach((): void => {
    component = new ContatoComponent();
  });

  it('should initialize the component', (): void => {
    expect(component).toBeDefined();
  });
});
