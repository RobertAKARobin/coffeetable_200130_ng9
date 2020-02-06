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
  styleUrls: ['./collection.component.scss'],
  templateUrl: './collection.component.html',
})
export class CollectionComponent {

  public fields$: Observable<Field.Field[]>;
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

  public recordCreate() {
    this._store.dispatch(Record.Actions.addOne());
  }

}
