import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-generator',
  template: `
    <p>
      dynamic-component-lib works!
    </p>
  `,
  styles: []
})
export class DynamicComponentLibComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
