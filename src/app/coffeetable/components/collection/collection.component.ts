import {
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  Collection,
  Field,
  Record,
} from '../../store';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'cf-coffeetable',
  styleUrls: ['./collection.component.scss'],
  templateUrl: './collection.component.html',
})
export class CollectionComponent {

  public fields$: Observable<Field.Field[]>;
  public fieldFocusId$: Observable<string | undefined>;
  public records$: Observable<Record.Record[]>;
  public recordFocusId$: Observable<string | undefined>;

  constructor(
    private _store: Store<Collection.State>,
  ) {
    this.fields$ = this._store.select(Field.selectAll);
    this.fieldFocusId$ = this._store.select(Field.selectIdOfFocus);
    this.records$ = this._store.select(Record.selectAll);
    this.recordFocusId$ = this._store.select(Record.selectIdOfFocus);
  }

  public fieldCreate() {
    this._store.dispatch(Field.Actions.addOne());
  }

  public recordCreate() {
    this._store.dispatch(Record.Actions.addOne());
  }

  public setFocus(record: Record.Record, field: Field.Field) {
    this._store.dispatch(Record.Actions.setFocus({id: record.id}));
    this._store.dispatch(Field.Actions.setFocus({id: field.id}));
  }

  public unsetFocus() {
    this._store.dispatch(Record.Actions.setFocus({id: undefined}));
    this._store.dispatch(Field.Actions.setFocus({id: undefined}));
  }

}
