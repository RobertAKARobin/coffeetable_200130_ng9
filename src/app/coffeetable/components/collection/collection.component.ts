import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'cf-collection',
  styleUrls: ['./collection.component.scss'],
  templateUrl: './collection.component.html',
})
export class CollectionComponent {

  // tslint:disable
  @Input() public data: any[];

}
