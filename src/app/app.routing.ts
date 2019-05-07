import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TableListComponent} from './table-list/table-list.component';

export const ROUTES: Routes = [
    {path: 'table-list', component: TableListComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
