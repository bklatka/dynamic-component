import { Component, Input, ViewChild } from '@angular/core';

import { DynamicHostDirective } from './directives/dynamic-host.directive';
import { DynamicComponentLibService } from './dynamic-component-lib.service';

@Component({
  selector: 'dc-generator',
  template: `
    <p>dynamic-component-lib works!</p>
    <div dcDynamicHost></div>
  `,
  styles: []
})
export class DynamicComponentLibComponent {
  @ViewChild(DynamicHostDirective) dynamicHost: DynamicHostDirective;

  @Input()
  set component(value) {
    this.dynamicComponentService.generateComponent(
      value,
      this.dynamicHost.viewContainerRef
    );
  }

  constructor(private dynamicComponentService: DynamicComponentLibService) {}
}
