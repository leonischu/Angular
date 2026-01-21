import { Routes } from '@angular/router';
import { About } from './about/about'
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';

export const routes: Routes = [
   {path:'about',component:About},
   {path:'login',component:Login},
   {path:'contact',component:Contact},
   {path:'',component:Home},
   {path:'profile',component:Profile,data:{name:'nis'}},
   {path:'**',component:PageNotFound }

];
