import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { Appproduct } from './product.component';
import { PageNotFoundComponent } from  './NotFound.component' 
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SalesModule } from './sales/sales.module';

const appRoutes: Routes = [
  { path: 'Product', component: Appproduct },
  { path: '**', component: PageNotFoundComponent } 
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes), SalesModule],
  declarations: [ AppComponent, Appproduct, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
