import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatesComponent } from './components/dates/dates.component';
import { FormComponent } from './components/form/form.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatesComponent, FormComponent, ManagerComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticaCpt';

  // Referencias a los componentes hijos
  @ViewChild(FormComponent) formComponent!: FormComponent;
  @ViewChild(ManagerComponent) managerComponent!: ManagerComponent;
  @ViewChild(DatesComponent) datesComponent!: DatesComponent;

  // Método para enviar todos los formularios
  onSubmitAll() {
    if (this.formComponent) this.formComponent.onSubmit();
    if (this.managerComponent) this.managerComponent.onSubmit();
    if (this.datesComponent) this.datesComponent.onSubmit();
  }
}
