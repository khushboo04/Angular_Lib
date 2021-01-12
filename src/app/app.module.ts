import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExampleNgLibModule } from 'example-ng-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleNgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
