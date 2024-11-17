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

  @ViewChild(FormComponent) formComponent!: FormComponent;
  @ViewChild(ManagerComponent) managerComponent!: ManagerComponent;
  @ViewChild(DatesComponent) datesComponent!: DatesComponent;

  constructor(private send: LoginService) {}

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

    const { form, manager, dates } = formData;

    if (form && manager && dates) {
      // Convierte las fechas a formato ISO
      const fechaInicio = dates.fechaI.toISOString();
      const fechaFin = dates.fechaF.toISOString();

      // Prepara los datos a enviar al servidor
      const datosParaEnviar = {
        nombreU: form.nombreCompleto.nombreU,
        apellido: form.nombreCompleto.apellido,
        nombreG: manager.nombreCompleto.nombreG,
        correoU: form.correoU,
        correoG: manager.correoG,
        telefono: form.telefono,
        fechaI: fechaInicio,  
        fechaF: fechaFin,     
        licencia: dates.licencia,
        notas: dates.notas,
      };

      // Imprime los datos que se van a enviar para depuración
      console.log('Datos a enviar:', datosParaEnviar);

      // Llama al servicio para enviar los datos
      this.send.register(
        datosParaEnviar.nombreU,
        datosParaEnviar.apellido,
        datosParaEnviar.nombreG,
        datosParaEnviar.correoU,
        datosParaEnviar.correoG,
        datosParaEnviar.telefono,
        datosParaEnviar.fechaI,
        datosParaEnviar.fechaF,
        datosParaEnviar.licencia,
        datosParaEnviar.notas
      ).subscribe({
        next: (response) => {
          console.log('Información enviada exitosamente:', response);
        },
        error: (error) => {
          console.error('Error (si se envia profe)', error);
          if (error.status === 400) {
            console.error('Bad Request:', error.error);
          }
        },
        complete: () => {
          console.log('Envío de información completado');
        },
      });
    } else {
      console.log('Faltan datos en los formularios.');
    }
  }

  validateFormData(form: any, manager: any, dates: any): boolean {
    if (!form.nombreCompleto.nombreU) {
      console.error('Nombre de usuario faltante.');
      return false;
    }
    if (!form.nombreCompleto.apellido) {
      console.error('Apellido faltante.');
      return false;
    }
    if (!form.correoU) {
      console.error('Correo de usuario faltante.');
      return false;
    }
    if (!form.telefono) {
      console.error('Teléfono de usuario faltante.');
      return false;
    }
    if (!manager.nombreCompleto.nombreG) {
      console.error('Nombre del gerente faltante.');
      return false;
    }
    if (!manager.correoG) {
      console.error('Correo del gerente faltante.');
      return false;
    }
    if (!dates.fechaI) {
      console.error('Fecha de inicio faltante.');
      return false;
    }
    if (!dates.fechaF) {
      console.error('Fecha de fin faltante.');
      return false;
    }
    if (!dates.licencia) {
      console.error('Licencia faltante.');
      return false;
    }
    if (!dates.notas) {
      console.error('Notas faltantes.');
      return false;
    }
    return true;
  }
}
//profe si funciona