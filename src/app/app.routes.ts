import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageToolbarComponent } from './page-toolbar/page-toolbar.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { SignupComponent } from './signup/signup.component';
import { DialogUserWindowComponent } from './dialog-user-window/dialog-user-window.component';
import { AuthGuard } from './guard/auth.guard';
import { MapComponent } from './map/map.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DocumentazioneComponent } from './documentazione/documentazione.component';


export const routes: Routes = [
    {
        path: '', redirectTo:'login', pathMatch:'full' //reindirizzo alla pagina di login
    }, 
    {
        path:'login',
    component:LoginComponent    },
    {
        path:'page-toolbar',
    component:PageToolbarComponent, canActivate:[AuthGuard]},
    {
        path:'users-admin',
    component:UsersAdminComponent, canActivate:[AuthGuard]},
    {
        path:'map',
    component:MapComponent, canActivate:[AuthGuard]},
    {
        path:'welcome-page',
    component:WelcomePageComponent, canActivate:[AuthGuard]},
    {
        path:'documentazione',
    component:DocumentazioneComponent, canActivate:[AuthGuard]},

    
];
