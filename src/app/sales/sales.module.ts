import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SalesRouting} from './sales.routing';
import { CustomerList} from './customer-list/customer-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, SalesRouting],
  declarations: [ CustomerList ]
})
export class SalesModule { };