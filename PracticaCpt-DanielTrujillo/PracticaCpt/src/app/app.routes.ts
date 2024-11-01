import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ManagerComponent } from './components/manager/manager.component';
import { DatesComponent } from './components/dates/dates.component';

export const routes: Routes = [

{
    path: 'form',
    component: FormComponent
},
{
    path: 'manager',
    component: ManagerComponent
},
{
    path: 'dates',
    component: DatesComponent
}
];
