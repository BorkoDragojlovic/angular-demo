import { RouterModule, Routes } from '@angular/router';
import { CustomerList } from './customer-list/customer-list.component';

const salesRoutes: Routes = [
  { path: 'sales',
    children: [
      { path: 'customer-list', component: CustomerList },
      //{ path: ':id', component: User }
    ]
  }
];

export const SalesRouting = RouterModule.forChild(salesRoutes);