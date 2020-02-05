import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CollectionComponent } from './components/collection/component';

import { Collection } from './store';

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
      Collection.featureKey,
      Collection.Store.reducers,
    ),
  ],
})
export class CoffeetableModule { }
