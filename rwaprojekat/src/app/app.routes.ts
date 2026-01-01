import { Routes } from '@angular/router';
import { SignUpComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => 
            import('./components/list/list.component').then((c)=> c.ListComponent),
    },
    {
        path:'part/:id',
        loadComponent: () =>
            import('./components/partview/partview.component').then((c)=> c.PartViewComponent),
    },
    {
        path:'signup',
        component: SignUpComponent
    },
    {
        path:'**',
        component: NotFoundComponent
    }
];
