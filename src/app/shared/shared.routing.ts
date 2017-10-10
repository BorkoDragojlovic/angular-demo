import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './NotFound.component';

const sharedRoutes: Routes = [
  { path: '**', component:PageNotFoundComponent }
];

export const SharedRouting = RouterModule.forChild(sharedRoutes);