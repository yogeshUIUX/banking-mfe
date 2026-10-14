import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'loans'
    },
    {
        path:'loans',
        loadChildren:() => loadRemoteModule('loan-mfe', './Route').then((m) => m.routes),

    },
    {
        path:'insurance',
        loadChildren:() => loadRemoteModule('insurance-mfe', './Route').then((m) => m.routes),
    }
];
