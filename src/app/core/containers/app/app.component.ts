import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromCore from 'src/app/core/reducers';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {

  public message$: Observable<string>;

  constructor(
    private store: Store<fromCore.State>,
  ) {
    this.message$ = this.store.pipe(select(fromCore.selectLayoutMessage));
  }

}
