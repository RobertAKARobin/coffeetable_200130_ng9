import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { LayoutComponent } from './components/layout/layout.component';
import { AppComponent } from './containers/app/app.component';
import { metaReducers, ROOT_REDUCERS } from './reducers';

import { DatasourceModule } from 'src/app/datasource';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateImmutability: true,
        strictStateSerializability: true,
      },
    }),
    StoreDevtoolsModule.instrument({}),
    DatasourceModule,
  ],
})
export class CoreModule { }
