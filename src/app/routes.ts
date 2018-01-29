import { Routes } from '@angular/router';
import { HomePage } from './views/home';
import { TestComponent } from './views/test/test';

export const AppRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomePage, data: {caption: 'Home'}},
    {path: 'test', component: TestComponent, data: {caption: 'Test'}},
];