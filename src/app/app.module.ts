import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from 'src/app/core';
import { AppComponent } from 'src/app/core/containers/app';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
  ],
})
export class AppModule { }
