import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component'; 
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';


@Component({
  selector: 'app-dates',
  standalone: true,
  imports: [FormComponent, EditorModule,ReactiveFormsModule,CommonModule,FormsModule,CalendarModule,InputTextareaModule, FloatLabelModule],
  templateUrl: './dates.component.html',
  styleUrl: './dates.component.css'
})
export class DatesComponent {
  text: string = ''; 
  otherForm: FormGroup;

  cities: any[] = [{label: 'New York', value: 'NY'}, {label: 'London', value: 'LDN'}, {label: 'Paris', value: 'PRS'}];
  constructor(private fb: FormBuilder, private router: Router) {
    this.otherForm = this.fb.group({
      name: ['', Validators.required],
      birthdate: ['', Validators.required],
      city: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.otherForm.valid) {
      console.log(this.otherForm.value);
      this.router.navigate(['/login']); 
    } else {
      console.log('Formulario no valido');
    }
  }


}

