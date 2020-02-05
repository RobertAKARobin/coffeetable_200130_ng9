import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  Collection,
  Field,
  Record,
} from '../../store';

@Component({
  selector: 'cf-coffeetable',
  styleUrls: ['./style.scss'],
  templateUrl: './template.html',
})
export class CollectionComponent {

  public fields$: Observable<Field.Field[]>;
  public records$: Observable<Record.Record[]>;

  constructor(
    private _store: Store<Collection.State>,
  ) {
    this.fields$ = this._store.select(Field.selectAll);
    this.records$ = this._store.select(Record.selectAll);
  }

  public createField() {
    this._store.dispatch(Field.Actions.addOne({
      payload: {
        id: Date.now().toString(),
      },
    }));
  }

  public createRecord() {
    this._store.dispatch(Record.Actions.addOne({
      payload: {
        data: Date.now().toString(),
        id: Date.now().toString(),
      },
    }));
  }

}
