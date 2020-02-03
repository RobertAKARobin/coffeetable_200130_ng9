import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './containers/app/app.component';

import { CoffeetableModule } from 'src/app/coffeetable';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    CoffeetableModule,
  ],
})
export class CoreModule { }
