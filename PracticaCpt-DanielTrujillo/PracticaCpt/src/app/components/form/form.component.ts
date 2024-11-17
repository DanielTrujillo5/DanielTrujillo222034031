import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatesComponent } from '../dates/dates.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DatesComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombreCompleto: this.fb.group({
        nombreU: ['', Validators.required],
        apellido: ['', Validators.required]
      }),
      correoU: ['', [Validators.required, Validators.email]],
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
