import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicComponentLibModule } from 'dynamic-component-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DynamicComponentLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
