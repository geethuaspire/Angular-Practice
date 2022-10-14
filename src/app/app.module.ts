import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloEnComponent, HelloTwComponent } from './hello.component';
import {DynamicComponentDirective} from './dynamic_component.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloEnComponent, HelloTwComponent, DynamicComponentDirective],
  entryComponents: [HelloEnComponent, HelloTwComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
