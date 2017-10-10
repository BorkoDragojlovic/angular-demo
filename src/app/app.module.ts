import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SalesModule } from './sales/sales.module';
import { FloorPlanModule } from './floor-plans/floor-plan.module';
import { SharedModule } from './shared/shared.module';
//import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock-data/in-memory-data.service';

const appRoutes: Routes = [
  //{ path: 'Product', component: Appproduct }
];

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(appRoutes),
    SalesModule,
    FloorPlanModule,
    SharedModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
