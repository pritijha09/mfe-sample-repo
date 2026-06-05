import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      loadRemoteModule('authentication', './Routes').then((m) => m.routes),
  },
  {
    path: 'admin',
    loadChildren: () =>
      loadRemoteModule('admin', './Routes').then((m) => m.routes),
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
