import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  template: `
    <h1>I am dynamic test component</h1>
    {{add}}
  `
})
export class TestComponent implements OnInit {
  @Input() add;
  constructor() {}

  ngOnInit() {}
}
