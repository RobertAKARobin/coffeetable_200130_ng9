import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromDatasource from 'src/app/datasource/reducers';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {

  // tslint:disable
  public data$: Observable<any[]>;

  constructor(
    private store: Store<fromDatasource.State>,
  ) {
    this.data$ = this.store.pipe(select(fromDatasource.selectData));
  }

}
