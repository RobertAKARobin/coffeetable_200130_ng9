import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CollectionComponent } from './components/collection/collection.component';
import * as fromCoffeetable from './reducers';

@NgModule({
  declarations: [
    CollectionComponent,
  ],
  exports: [
    CollectionComponent,
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
