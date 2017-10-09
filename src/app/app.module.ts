import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { Appproduct } from './product.component';
import { PageNotFoundComponent } from  './NotFound.component' 
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SalesModule } from './sales/sales.module';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';
import { DxVectorMapModule} from 'devextreme-angular';

const appRoutes: Routes = [
  { path: 'Product', component: Appproduct },
  { path: 'floor-plan', component: FloorPlanComponent}, 
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes), SalesModule, DxVectorMapModule],
  declarations: [ AppComponent, Appproduct, PageNotFoundComponent, FloorPlanComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
