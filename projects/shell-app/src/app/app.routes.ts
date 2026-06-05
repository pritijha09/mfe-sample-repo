import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadChildren: () =>
      loadRemoteModule('admin', './Routes').then((m) => m.routes),
  },
  {
    path: 'auth',
    loadChildren: () =>
      loadRemoteModule('auth-mfe', './Routes').then((m) => m.routes),
  },
  {
    path: 'products',
    loadChildren: () =>
      loadRemoteModule('products', './Routes').then((m) => m.routes),
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      loadRemoteModule('products', './Routes').then((m) => m.routes),
  }
];
