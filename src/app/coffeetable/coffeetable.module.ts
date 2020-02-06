import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { Collection } from './store';

import { CollectionComponent } from './components/collection/collection.component';
import { FieldHeaderComponent } from './components/field-header/field-header.component';
import { RecordValueComponent } from './components/record-value/record-value.component';
import { RecordHeaderComponent } from './components/record-header/record-header.component';

@NgModule({
  declarations: [
    CollectionComponent,
    RecordValueComponent,
    FieldHeaderComponent,
    RecordHeaderComponent,
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
