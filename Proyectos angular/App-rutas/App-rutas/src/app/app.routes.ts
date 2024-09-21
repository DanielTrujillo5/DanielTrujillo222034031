import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/views/home-page/home-page.component';
import { AuthPageComponent } from './modules/auth/views/auth-page/auth-page.component';
import { SidebarPageComponent } from './modules/sidebar/views/sidebar-page/sidebar-page.component';

export const routes: Routes = [
    { 
        path: '', component: HomePageComponent 
    },
    {
        path:'auth', component: AuthPageComponent
    },
    {
        path:'sidebar', component: SidebarPageComponent
    }
    // Add your routes here
];

