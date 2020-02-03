import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as CoffeetableActions from '../../actions';
import * as Coffeetable from '../../models';
import * as fromCoffeetable from '../../reducers';

@Component({
  selector: 'cf-coffeetable',
  styleUrls: ['./coffeetable.component.scss'],
  templateUrl: './coffeetable.component.html',
})
export class CoffeetableComponent {

  public collections$: Observable<Coffeetable.Collection[]>;

  constructor(
    private _store: Store<fromCoffeetable.State>,
  ) {
    this.collections$ = this._store.pipe(select(fromCoffeetable.selectCollections));
  }

  public createCollection(): void {
    this._store.dispatch(CoffeetableActions.createCollection());
  }

}
