import { Routes } from '@angular/router';

export const routes: Routes = [
 {
    path: '',
    loadComponent: () => import('./features/pages/home-component/home-component').then(m => m.HomeComponent)
 }
];