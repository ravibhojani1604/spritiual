import { Routes } from '@angular/router';
import { GujaratiChalishaComponent } from './components/gujarati-chalisha/gujarati-chalisha.component';
import { JayAdhyasktiComponent } from './components/jay-adhyaskti/jay-adhyaskti.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'chalisha' },
    { path: 'chalisha', component: GujaratiChalishaComponent },
    {path:'skti',component:JayAdhyasktiComponent}
];
