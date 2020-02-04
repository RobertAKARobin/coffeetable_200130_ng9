import {
  Component,
  Input,
} from '@angular/core';

import { Collection } from '../../store';

@Component({
  selector: 'cf-collection',
  styleUrls: ['./collection.component.scss'],
  templateUrl: './collection.component.html',
})
export class CollectionComponent {

  @Input() public collection: Collection.Collection;

}
