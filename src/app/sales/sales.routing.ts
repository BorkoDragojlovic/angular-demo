import { RouterModule, Routes } from '@angular/router';
import { CustomerList } from './customer-list/customer-list.component';
import { ProductList } from './product-list/product-list.component';

const salesRoutes: Routes = [
  {
    path: 'sales',
    children: [
      { path: 'customer-list', component: CustomerList },
      { path: 'product-list', component: ProductList }
    ]
  },
  {
    path: '',
    redirectTo: '/sales/customer-list',
    pathMatch: 'full'
  }
];

export const SalesRouting = RouterModule.forChild(salesRoutes);