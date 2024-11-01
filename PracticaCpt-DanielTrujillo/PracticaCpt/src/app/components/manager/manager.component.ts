import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'] 
})
export class ManagerComponent {
  registroForm: FormGroup;
  //Arreglo de tipo clave valor
 
  constructor(private fb: FormBuilder) {
     this.registroForm = this.fb.group({
       nombreCompleto: this.fb.group({
         nombre: ['', Validators.required],
         apellido: ['', Validators.required]
       }),
       email: ['', [Validators.required, Validators.email]],
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