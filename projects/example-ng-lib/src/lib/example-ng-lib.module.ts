import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleNgLibComponent } from './example-ng-lib.component';
import { OptionComponent } from './option/option.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { QueryFormComponent } from './query-form/query-form.component';

@NgModule({
  declarations: [ExampleNgLibComponent, OptionComponent, QueryFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [ExampleNgLibComponent, OptionComponent, QueryFormComponent]
})
export class ExampleNgLibModule { }
