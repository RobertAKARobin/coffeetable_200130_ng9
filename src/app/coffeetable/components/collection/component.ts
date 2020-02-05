import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  Collection,
  Field,
} from '../../store';

@Component({
  selector: 'cf-coffeetable',
  styleUrls: ['./style.scss'],
  templateUrl: './template.html',
})
export class CollectionComponent {

  public fields$: Observable<Field.Field[]>;

  constructor(
    private _store: Store<Collection.State>,
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
