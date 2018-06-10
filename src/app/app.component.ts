import { Component } from '@angular/core';

import { TestComponent } from './test-component.component';

@Component({
  selector: 'app-root',
  template: `
    <dc-generator [component]="componentToGenerate"></dc-generator>
  `
})
export class AppComponent {
  componentToGenerate = TestComponent;
}
