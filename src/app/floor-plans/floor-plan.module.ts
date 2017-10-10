import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FloorPlanRouting} from './floor-plan.routing';
import { FloorPlanComponent} from './floor-plan/floor-plan.component';
import { DxVectorMapModule} from 'devextreme-angular';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FloorPlanRouting, DxVectorMapModule],
  declarations: [ FloorPlanComponent ],
  exports:  [ FloorPlanComponent ]
})
export class FloorPlanModule { };