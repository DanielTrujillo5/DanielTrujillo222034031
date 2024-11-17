import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dates',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, CalendarModule, InputTextareaModule, FloatLabelModule, EditorModule],
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent {
  otherForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.otherForm = this.fb.group({
      fechaI: ['', Validators.required],
      fechaF: ['', Validators.required],
      notas: [''],
      licencia: ['', Validators.required],
    });

    // Suscribirse a los cambios del formulario para depuración
    this.otherForm.valueChanges.subscribe((val) => {
      console.log('Formulario actualizado:', val);
    });
  }

  // Actualiza el valor de "licencia" manualmente cuando cambia en el editor
  updateLicencia(event: any) {
    this.otherForm.controls['licencia'].setValue(event.htmlValue);
  }

  onSubmit() {
    if (this.otherForm.valid) {
      console.log('Datos de DatesComponent:', this.otherForm.value);
    } else {
      console.log('Formulario inválido.');
      this.otherForm.markAllAsTouched();
    }
  }
}
