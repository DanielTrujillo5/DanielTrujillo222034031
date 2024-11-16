import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatesComponent } from './components/dates/dates.component';
import { FormComponent } from './components/form/form.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ButtonModule } from 'primeng/button';
import { LoginService } from './services/login.service';

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

  constructor(private send: LoginService) {} 

  // Método para enviar todos los formularios
  onSubmitAll() {
    const formData = {
      form: this.formComponent ? this.formComponent.registroForm.value : null,
      manager: this.managerComponent ? this.managerComponent.registroForm.value : null,
      dates: this.datesComponent ? this.datesComponent.otherForm.value : null,
    };

    if (this.formComponent) this.formComponent.onSubmit();
    if (this.managerComponent) this.managerComponent.onSubmit();
    if (this.datesComponent) this.datesComponent.onSubmit();

    console.log('Datos de todos los formularios:', formData);

    // Llamada al servicio para enviar los datos
    const { form, manager, dates } = formData;

    if (form && manager && dates) {
      this.send.register(
          form.nombreU, 
          form.apellido,
          form.correoU,
          form.telefono,
          manager.nombreG,
          manager.correoG,
          dates.fechaI,
          dates.fechaF,
          dates.licencia,
          dates.notas
        )
        .subscribe({
          next: (response) => {
            console.log('Información enviada exitosamente', response);
          },
          error: (error) => {
            console.log('Error al enviar información', error);
          },
          complete: () => {
            console.log('Envío de información completado');
          },
        });
    } else {
      console.log('Faltan datos en los formularios.');
    }
  }
}
