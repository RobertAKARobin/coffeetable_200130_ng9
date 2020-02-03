import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromCoffeetable from './reducers';

import { CollectionComponent } from './components/collection/collection.component';
import { RecordComponent } from './components/record/record.component';
import { CoffeetableComponent } from './containers/coffeetable/coffeetable.component';

import { StoreService } from './services';

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
  providers: [
    StoreService,
  ],
})
export class CoffeetableModule { }
