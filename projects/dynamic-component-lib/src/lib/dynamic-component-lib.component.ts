import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChange, ViewChild } from '@angular/core';

import { DynamicHostDirective } from './directives/dynamic-host.directive';
import { DynamicComponentLibService } from './dynamic-component-lib.service';

@Component({
  selector: 'dc-generator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>dynamic-component-lib works!</p>
    <div dcDynamicHost></div>
  `,
  styles: []
})
export class DynamicComponentLibComponent implements OnChanges {
  @ViewChild(DynamicHostDirective) dynamicHost: DynamicHostDirective;

  @Input() component;
  @Input() inputs;

  constructor(private dynamicComponentService: DynamicComponentLibService) {}

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const componentInput =
      (changes['component'] && !!changes['component'].currentValue) ||
      !!this.component;

    if (componentInput) {
      const componentRef = this.dynamicComponentService.generateComponent(
        this.component,
        this.dynamicHost.viewContainerRef
      );
      this.dynamicComponentService.populateInputs(componentRef, this.inputs);
    }
  }
}
