import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'va-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'home.html',
  styleUrls: ['home.scss'],
})
export class HomeComponent {
  //
}
