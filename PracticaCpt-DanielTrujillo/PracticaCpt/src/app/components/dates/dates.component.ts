import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { EditorModule } from 'primeng/editor';

@Component({
  selector: 'app-dates',
  standalone: true,
  imports: [FormComponent, EditorModule],
  templateUrl: './dates.component.html',
  styleUrl: './dates.component.css'
})
export class DatesComponent {

}
