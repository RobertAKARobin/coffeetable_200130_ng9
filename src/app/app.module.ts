import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core';
import { LayoutComponent } from './core/components/layout';

@NgModule({
  bootstrap: [LayoutComponent],
  imports: [
    BrowserModule,
    CoreModule,
  ],
  providers: [],
})
export class AppModule { }
