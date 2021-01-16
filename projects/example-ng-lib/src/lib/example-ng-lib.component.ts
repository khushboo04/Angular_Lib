import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'enl-example-ng-lib',
  template: `
    <h1>
      Welcome to Angular library
    </h1>
  `,
  styles: ['h1 { font-weight: normal; text-align: center; color: #495057 }']
})
export class ExampleNgLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
