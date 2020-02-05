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

  public fieldCreate() {
    this._store.dispatch(Field.Actions.addOne());
  }

  public fieldUpdate(fieldId: string, event: Event) {
    this._store.dispatch(Field.Actions.updateOne({
      changes: {
        getter: (event.target as HTMLInputElement).value,
      },
      id: fieldId,
    }));
  }

  public recordCreate() {
    this._store.dispatch(Record.Actions.addOne());
  }

  public recordUpdate(recordId: string, fieldId: string, event: Event) {
    this._store.dispatch(Record.Actions.updateOne({
      changes: {
        data: {
          [fieldId]: (event.target as HTMLInputElement).value,
        },
      },
      id: recordId,
    }));
  }

}
