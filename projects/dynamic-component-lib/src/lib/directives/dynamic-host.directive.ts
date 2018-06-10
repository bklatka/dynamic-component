import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[dcDynamicHost]' })
export class DynamicHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
