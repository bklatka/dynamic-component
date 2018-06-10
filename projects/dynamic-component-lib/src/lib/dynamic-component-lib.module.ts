import { NgModule } from '@angular/core';

import { DynamicHostDirective } from './directives/dynamic-host.directive';
import { DynamicComponentLibComponent } from './dynamic-component-lib.component';

@NgModule({
  imports: [],
  declarations: [DynamicComponentLibComponent, DynamicHostDirective],
  exports: [DynamicComponentLibComponent]
})
export class DynamicComponentLibModule {}
