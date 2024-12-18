import { Routes } from '@angular/router';
import { GujaratiChalishaComponent } from './components/gujarati-chalisha/gujarati-chalisha.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'chalisha' },
    { path: 'chalisha', component: GujaratiChalishaComponent }
];
