import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  Coffeetable,
  Field,
} from '../../store';

@Component({
  selector: 'cf-coffeetable',
  styleUrls: ['./coffeetable.component.scss'],
  templateUrl: './coffeetable.component.html',
})
export class CoffeetableComponent {

  public fields$: Observable<Field.Field[]>;

  constructor(
    private _store: Store<Coffeetable.State>,
  ) {
    this.fields$ = this._store.select(Field.selectAll);
  }

  public createField() {
    this._store.dispatch(Field.Actions.addOne({
      payload: {
        id: Date.now().toString(),
      },
    }));
  }

}
