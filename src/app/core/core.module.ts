import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { LayoutComponent } from './components/layout/layout.component';
import { AppComponent } from './containers/app/app.component';
import * as fromCore from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCore.featureKey, fromCore.reducers),
  ],
})
export class CoreModule { }
