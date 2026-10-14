import { Routes } from '@angular/router';
import { App } from './app';
import { LoanDashboard } from './pages/loan-dashboard/loan-dashboard';
import { LoanUser } from './pages/loan-user/loan-user';

export const routes: Routes = [
    {
        path: '',
        component: App,
        children: [
            {
                path: '',
                component: LoanDashboard
            },
            {
                path: 'loan-user',
                component: LoanUser
            }
        ]
    }
];
