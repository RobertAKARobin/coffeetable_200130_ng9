import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromDatasource from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromDatasource.featureKey,
      fromDatasource.reducer,
    ),
  ],
})
export class DatasourceModule { }
