import { Routes } from '@angular/router';
import { App } from './app';
import { InsDashboard } from './pages/ins-dashboard/ins-dashboard';
import { ClaimList } from './pages/claim-list/claim-list';

export const routes: Routes = [
    {
        path: '',
        component: App,
        children: [
            {
                path: '',
                component: InsDashboard
            },
            {
                path: 'Claim-List',
                component: ClaimList
            }
        ]
    }
];
