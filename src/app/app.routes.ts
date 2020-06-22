import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'flights',
        pathMatch: 'full'
    },
    {
        path: 'flights',
        loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule)
    },
];
