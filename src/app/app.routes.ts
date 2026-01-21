import { Routes } from '@angular/router';
import { About } from './about/about'
import { Contact } from './contact/contact';
import { Login } from './login/login';

export const routes: Routes = [
   {path:'about',component:About},
   {path:'login',component:Login},
   {path:'contact',component:Contact}

];
