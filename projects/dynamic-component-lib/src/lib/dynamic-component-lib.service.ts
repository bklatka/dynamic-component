import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';

import { DynamicComponentLibModule } from './dynamic-component-lib.module';

@Injectable({
  providedIn: DynamicComponentLibModule
})
export class DynamicComponentLibService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  generateComponent(component, viewRef: ViewContainerRef) {
    const factoryRef = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    viewRef.clear();
    const componentReference: ComponentRef<any> = viewRef.createComponent(
      factoryRef
    );
    return componentReference; // need to export explicity cause of TS error
  }

  populateInputs(component, inputs) {
    Object.keys(inputs).forEach(inputKey => {
      if (inputs[inputKey]) {
        component.instance[inputKey] = inputs[inputKey];
      }
    });
  }
}
