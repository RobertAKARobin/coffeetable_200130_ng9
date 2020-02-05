import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  Coffeetable,
  Collection,
} from '../../store';

@Component({
  selector: 'cf-coffeetable',
  styleUrls: ['./coffeetable.component.scss'],
  templateUrl: './coffeetable.component.html',
})
export class CoffeetableComponent {

  public collections$: Observable<Collection.Collection[]>;

  constructor(
    private _store: Store<Coffeetable.State>,
  ) {
    this.collections$ = this._store.select(Collection.selectAll);
  }

  public createCollection() {
    this._store.dispatch(Collection.Actions.addOne({
      payload: {
        id: Date.now().toString(),
      },
    }));
  }

}
