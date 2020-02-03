import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { metaReducers, ROOT_REDUCERS } from './reducers';

import { CoreModule } from 'src/app/core';
import { AppComponent } from 'src/app/core/containers/app/app.component';

@NgModule({
  bootstrap: [AppComponent],
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
    CoreModule,
  ],
})
export class AppModule { }
