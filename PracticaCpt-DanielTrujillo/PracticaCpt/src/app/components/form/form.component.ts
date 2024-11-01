import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DatesComponent } from "../dates/dates.component";
import { ManagerComponent } from '../manager/manager.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DatesComponent, ReactiveFormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  registroForm: FormGroup;
 //Arreglo de tipo clave valor

 constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombreCompleto: this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required]
      }),
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log('Formulario Enviado', this.registroForm.value);
    } else {
      this.registroForm.markAllAsTouched();
    }
  }
}