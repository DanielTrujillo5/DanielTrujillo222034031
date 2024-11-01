import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatesComponent } from './components/dates/dates.component';
import { FormComponent } from './components/form/form.component';
import { ManagerComponent } from './components/manager/manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatesComponent, FormComponent, ManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PracticaCpt';
}
