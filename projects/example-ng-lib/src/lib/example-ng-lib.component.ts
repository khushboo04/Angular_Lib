import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'enl-example-ng-lib',
  template: `
    <p>
      example-ng-lib works!
      {{ title }}
    </p>
  `,
  styles: [
  ]
})
export class ExampleNgLibComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit(): void {
  }

}
