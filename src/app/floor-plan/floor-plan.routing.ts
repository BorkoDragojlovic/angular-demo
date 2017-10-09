import { RouterModule, Routes } from '@angular/router';
import { FloorPlanComponent } from './floor-plan.component';

const floorPlanRoutes: Routes = [
  { path: 'floor-plan', component:FloorPlanComponent }
];

export const FloorPlanRouting = RouterModule.forChild(floorPlanRoutes);