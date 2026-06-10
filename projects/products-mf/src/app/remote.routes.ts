import { Routes } from '@angular/router';
import { App } from './app';
import { ProductList } from './features/product-list/product-list';
import { ProductDetails } from './features/product-details/product-details';

export const routes: Routes = [
  {
    path: '',
    component: ProductList
  },

  {
    path: 'category/:category',
    component: ProductList
  },

  {
    path: ':id',
    component: ProductDetails
  }
];