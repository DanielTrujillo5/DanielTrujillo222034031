import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Url del API almacenada de forma privada
  apiUrl= "https://localhost:7042/api/Formulario";

  constructor(private http: HttpClient) { }

  // Observable es un objeto que representa un flujo de datos que se pueden manejar 
  // de forma asíncrona. Los Observables son parte de la biblioteca RxJS (Reactive Extensions for JavaScript) 
  // y se utilizan principalmente para manejar eventos o flujos de datos que pueden ocurrir en el futuro, 
  // como respuestas de peticiones HTTP, eventos del usuario - se controla con HttpClientModule


  register(nombreU:string, apellido:string, nombreG:string,correoU:string, correoG:string, telefono:number, fechaI:string, fechaF:string, licencia:string, notas:string):Observable<any> {
    
    return this.http.post(`${this.apiUrl}/register`,{nombreU, apellido, nombreG,correoU,correoG,telefono,fechaI,fechaF,licencia,notas});
  }

}
