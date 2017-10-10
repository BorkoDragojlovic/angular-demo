import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedRouting } from './shared.routing';
import { PageNotFoundComponent } from './NotFound.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, SharedRouting],
  declarations: [ PageNotFoundComponent ]
})
export class SharedModule { };