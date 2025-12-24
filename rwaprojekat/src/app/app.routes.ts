import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { SignUpComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => 
            import('./components/list/list.component').then((c)=> c.ListComponent),
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
