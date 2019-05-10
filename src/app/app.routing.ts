import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TableListComponent} from './table-list/table-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export const ROUTES: Routes = [
    {path: 'table-list', component: TableListComponent},
    {path: 'dashboard', component: DashboardComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
