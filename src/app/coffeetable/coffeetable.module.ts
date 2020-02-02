import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CollectionComponent } from './components/collection/collection.component';
import { CoffeetableComponent } from './containers/coffeetable/coffeetable.component';
import * as fromCoffeetable from './reducers';

@NgModule({
  declarations: [
    CoffeetableComponent,
    CollectionComponent,
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
