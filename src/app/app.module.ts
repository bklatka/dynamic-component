import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicComponentLibModule } from 'dynamic-component-lib';

import { AppComponent } from './app.component';
import { TestComponent } from './test-component.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  entryComponents: [TestComponent],
  imports: [BrowserModule, DynamicComponentLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
