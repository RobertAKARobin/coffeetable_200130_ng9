import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreService } from '../../services';
import { Collection } from '../../store';

@Component({
  selector: 'cf-coffeetable',
  styleUrls: ['./coffeetable.component.scss'],
  templateUrl: './coffeetable.component.html',
})
export class CoffeetableComponent {

  public collections$: Observable<Collection.Collection[]>;

  constructor(
    private _store: StoreService,
  ) {
    this.collections$ = this._store.collectionGetAll();
  }

  public createCollection() {
    this._store.collectionCreate();
  }

}
