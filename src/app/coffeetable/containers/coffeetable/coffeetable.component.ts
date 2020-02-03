import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import * as Coffeetable from '../../models';
import { StoreService } from '../../services';

@Component({
  selector: 'cf-coffeetable',
  styleUrls: ['./coffeetable.component.scss'],
  templateUrl: './coffeetable.component.html',
})
export class CoffeetableComponent {

  public collections$: Observable<Coffeetable.Collection[]>;

  constructor(
    private _store: StoreService,
  ) {
    this.collections$ = this._store.collectionGetAll();
  }

  public createCollection() {
    this._store.collectionCreate();
  }

}
