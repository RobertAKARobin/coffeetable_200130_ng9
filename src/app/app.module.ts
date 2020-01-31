import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from 'src/app/core';
import { AppComponent } from 'src/app/core/containers/app';
import { metaReducers, ROOT_REDUCERS } from './reducers';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
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
  ],
})
export class AppModule { }
