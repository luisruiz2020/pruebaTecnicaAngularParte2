import { Component } from '@angular/core';

import { usuarioI } from '../Modelos/usuario.Interface';

import {
  HttpClient, HttpEvent, HttpEventType, HttpProgressEvent,
  HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.obtenerListaUsuarios();
  }

  obtenerListaUsuarios():Observable<usuarioI[]>{
    debugger;
    let url = "https://jsonplaceholder.typicode.com/users/"
    var temp = this.http.get<usuarioI[]>(url); 
    console.log(temp);
    return temp;
  }
}
