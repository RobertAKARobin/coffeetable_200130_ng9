import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  Coffeetable,
  Collection,
} from '../store';

@Injectable()
export class StoreService {

  constructor(
    private _store: Store<Coffeetable.State>,
  ) { }

  public collectionCreate(): void {
    this._store.dispatch(Collection.Actions.addOne({
      payload: {
        id: Date.now().toString(),
      },
    }));
  }

  public collectionGetAll(): Observable<Collection.Collection[]> {
    return this._store.pipe(select(Collection.selectAll));
  }
}
