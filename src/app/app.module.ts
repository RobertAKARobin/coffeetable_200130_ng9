import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core';
import { LayoutComponent } from './core/components/layout';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
