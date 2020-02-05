import {
  Component,
  Input,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  Coffeetable,
  Collection,
  Field,
} from '../../store';

@Component({
  selector: 'cf-collection',
  styleUrls: ['./collection.component.scss'],
  templateUrl: './collection.component.html',
})
export class CollectionComponent {

  public fields$: Observable<Field.Field[]>;

  @Input() public collection: Collection.Collection;

  constructor(
    private _store: Store<Coffeetable.State>,
  ) {
    this.fields$ = this._store.select(Field.selectAll);
  }

  public createField() {
    this._store.dispatch(Field.Actions.addOne({
      payload: {
        id: Date.now().toString(),
      },
    }));
  }

}
