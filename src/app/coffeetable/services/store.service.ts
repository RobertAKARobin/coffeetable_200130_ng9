import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as CoffeetableActions from '../actions';
import * as Coffeetable from '../models';
import * as fromCoffeetable from '../reducers';

@Injectable()
export class StoreService {

  constructor(
    private _store: Store<fromCoffeetable.State>,
  ) { }

  public collectionCreate(): void {
    this._store.dispatch(CoffeetableActions.collectionCreate());
  }

  public collectionGetAll(): Observable<Coffeetable.Collection[]> {
    return this._store.pipe(select(fromCoffeetable.selectCollections));
  }
}
