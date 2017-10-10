import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { Appproduct } from './product.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SalesModule } from './sales/sales.module';
import { FloorPlanModule } from './floor-plans/floor-plan.module';
import { SharedModule } from './shared/shared.module';

const appRoutes: Routes = [
  { path: 'Product', component: Appproduct }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes), SalesModule, FloorPlanModule, SharedModule],
  declarations: [ AppComponent, Appproduct ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
