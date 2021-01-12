import { NgModule } from '@angular/core';
import { ExampleNgLibComponent } from './example-ng-lib.component';
import { OptionComponent } from './option/option.component';



@NgModule({
  declarations: [ExampleNgLibComponent, OptionComponent],
  imports: [
  ],
  exports: [ExampleNgLibComponent, OptionComponent]
})
export class ExampleNgLibModule { }
