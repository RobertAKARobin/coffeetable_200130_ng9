import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CoffeetableComponent } from './components/coffeetable/coffeetable.component';
import { CollectionComponent } from './components/collection/collection.component';
import { RecordComponent } from './components/record/record.component';

import { Coffeetable } from './store';

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
      Coffeetable.featureKey,
      Coffeetable.Store.reducers,
    ),
  ],
})
export class CoffeetableModule { }
