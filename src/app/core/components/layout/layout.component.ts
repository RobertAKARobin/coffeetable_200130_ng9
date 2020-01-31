import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-layout',
  styleUrls: ['./layout.component.scss'],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {

  @Input() public message: string;

}
