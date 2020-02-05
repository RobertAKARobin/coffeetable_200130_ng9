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

  public fields$: Observable<Field.Schema[]>;
  public records$: Observable<Record.Schema[]>;

  constructor(
    private _store: Store<Collection.State>,
  ) {
    this.fields$ = this._store.select(Field.selectAll);
    this.records$ = this._store.select(Record.selectAll);
  }

  public fieldCreate() {
    this._store.dispatch(Field.Actions.addOne());
  }

  public fieldUpdate(field: Field.Schema, value: string) {
    this._store.dispatch(Field.Actions.updateOne({
      changes: {
        getter: value,
      },
      id: field.id,
    }));
  }

  public recordCreate() {
    this._store.dispatch(Record.Actions.addOne());
  }

  public recordUpdate(record: Record.Schema, field: Field.Schema, value: string) {
    this._store.dispatch(Record.Actions.updateOne({
      changes: {
        data: {
          ...record.data,
          [field.id]: value,
        },
      },
      id: record.id,
    }));
  }

}
