import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CollectionComponent } from './components/collection/collection.component';
import { CoffeetableComponent } from './containers/coffeetable/coffeetable.component';
import * as fromCoffeetable from './reducers';
import { RecordComponent } from './components/record/record.component';

@NgModule({
  declarations: [
    CoffeetableComponent,
    CollectionComponent,
    RecordComponent,
  ],
  exports: [
    CoffeetableComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCoffeetable.featureKey,
      fromCoffeetable.reducer,
    ),
  ],
})
export class CoffeetableModule { }
