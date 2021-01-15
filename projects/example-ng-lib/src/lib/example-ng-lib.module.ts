import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleNgLibComponent } from './example-ng-lib.component';
import { OptionComponent } from './option/option.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [ExampleNgLibComponent, OptionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [ExampleNgLibComponent, OptionComponent]
})
export class ExampleNgLibModule { }
