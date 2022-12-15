import { Component } from '@angular/core';

import { usuarioI } from '../Modelos/usuario.Interface';

import {
  HttpClient,
  HttpEvent,
  HttpEventType,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prueba';
  url: string = 'https://jsonplaceholder.typicode.com/';
  listaUsuarios = [
    {
      id: 1,
      name: 'Leanne Graham 2',
      username: 'Bret2222',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    }
  ];
  usu = {
    id: 1,
    name: 'Leanne Graham 2',
    username: 'Bret2222',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.actualizarUsuario(1, this.usu).subscribe((data) => {
      console.log(data);
    });

    this.obtenerListaUsuarios().subscribe((data) => {
      this.listaUsuarios = data;
      console.log(data);
    });

    this.obtenerUsuario(1).subscribe((data) => {
      console.log(data);
    });

    this.eliminarUsuario(1).subscribe((data) => {
      console.log(data);
    });
  }

  obtenerListaUsuarios(): Observable<usuarioI[]> {
    let urlObtenerListaUsuarios = this.url + 'users/';
    return this.http.get<usuarioI[]>(urlObtenerListaUsuarios);
  }

  obtenerUsuario(id: number): Observable<usuarioI> {
    let urlObtenerUsuarios = this.url + 'users/' + id;
    return this.http.get<usuarioI>(urlObtenerUsuarios);
  }

  actualizarUsuario(id: number, usuario: usuarioI): Observable<usuarioI> {
    let urlObtenerUsuarios = this.url + 'users/' + id;
    return this.http.put<usuarioI>(urlObtenerUsuarios, usuario);
  }

  eliminarUsuario(id: number): Observable<string> {
    let urlObtenerUsuarios = this.url + 'users/' + id;
    return this.http.delete<string>(urlObtenerUsuarios);
  }

  crearUsuario(usuario: usuarioI): Observable<usuarioI> {
    let urlObtenerUsuarios = this.url + 'users/';
    return this.http.post<usuarioI>(urlObtenerUsuarios, usuario);
  }
}
