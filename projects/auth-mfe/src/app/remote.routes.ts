import { Routes } from '@angular/router';

export const routes: Routes = [
 {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./features/login/login').then(m => m.Login)
    },
    {
        path: 'signup',
        loadComponent: () => import('./features/signup/signup').then(m => m.Signup)
    },
    {
        path: 'forgot-password',
        loadComponent: () => import('./features/forgot-password/forgot-password').then(m => m.ForgotPassword)
    },
    {
        path: 'otp-verification',
        loadComponent: () => import('./features/otp-verification/otp-verification').then(m => m.OtpVerification)
    }
];