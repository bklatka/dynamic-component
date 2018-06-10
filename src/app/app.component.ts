import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { TestComponent } from './test-component.component';

@Component({
  selector: 'app-root',
  template: `
    <dc-generator [component]="componentToGenerate$ | async" [inputs]="componentInputs$ | async"></dc-generator>
  `
})
export class AppComponent {
  componentToGenerate$ = timer(6000).pipe(map(() => TestComponent));
  componentInputs$ = timer(5000).pipe(map(() => ({ add: 'async text' })));
}
