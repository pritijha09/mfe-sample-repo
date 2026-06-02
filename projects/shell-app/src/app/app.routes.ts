import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
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
];
