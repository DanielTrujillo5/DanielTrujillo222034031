import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MytestcomponentComponent } from './mytestcomponent/mytestcomponent.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SidbarComponent } from './shared/components/sidebar/sidbar.component';

export const routes: Routes = [
    {
        path: "",
        component: MytestcomponentComponent 
    },
    {
        path: "auth",
        component: MytestcomponentComponent
    },
    {
        path: "servicios",
        component: ServiciosComponent
    },
    {
        path:"sidebar",
        component: SidbarComponent
    },
];

