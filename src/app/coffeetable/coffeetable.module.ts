import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { Collection } from './store';

import { CollectionComponent } from './components/collection/collection.component';
import { RecordValueComponent } from './components/record-value/record-value.component';

@NgModule({
  declarations: [
    CollectionComponent,
    RecordValueComponent,
  ],
  exports: [
    CollectionComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      Collection.featureKey,
      Collection.Store.reducers,
    ),
  ],
})
export class CoffeetableModule { }
