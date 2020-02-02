import {
  Component,
  Input,
} from '@angular/core';

import * as Coffeetable from 'src/app/coffeetable/models';

@Component({
  selector: 'cf-collection',
  styleUrls: ['./collection.component.scss'],
  templateUrl: './collection.component.html',
})
export class CollectionComponent {

  @Input() public collection: Coffeetable.Collection;

}
