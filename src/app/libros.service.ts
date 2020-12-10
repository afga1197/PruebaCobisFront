import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private url = 'http://localhost:8080/pruebaCobis/services/libros/';

  constructor(private httpClient: HttpClient) { }

  public crear( libros ): Observable<any>{
    return this.httpClient.post<any>(`${this.url}registrarLibro`,libros);
  }

  public lista(): Observable<any>{
    return this.httpClient.get<any>(`${this.url}listarLibros`);
  }

  public borrar(id): Observable<any>{
    return this.httpClient.delete<any>(`${this.url}borrarLibro?id=${id}`);
  }

  public modificar( libros ): Observable<any>{
    return this.httpClient.put<any>(`${this.url}modificarLibro`,libros);
  }

}
