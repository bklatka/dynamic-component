import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  template: `
    <h1>I am dynamic test component</h1>
  `
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
