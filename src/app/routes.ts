import { Routes } from '@angular/router';
import { HomePage } from './views/home';
import { TestComponent } from './views/test/test';

export const AppRoutes: Routes = [
    {path: '', component: HomePage},
    {path: 'test', component: TestComponent},
];