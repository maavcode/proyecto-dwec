import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tema } from '../modelos/tema'; // Importo la interfaz


@Injectable({
  providedIn: 'root'
})
export class TemarioService {

  httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
    )
  };

  private temasUrl = 'api/temas'
  constructor(private http: HttpClient) { }

  getTemas(): Observable<Tema[]> {
    const temas = this.http.get<Tema[]>(this.temasUrl).
      pipe(
        tap(_ => this.log('Temas cargados')),
        catchError(this.handleError<Tema[]>('getTemas', [])));
    return temas;
  }

  /** Método de log para los mensajes de la aplicación */
  private log(message: string) {
    console.log(`TemarioService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Envía el error a la consola
      console.error(error);
      // Envía el error formateado al usuario
      this.log(`${operation} failed: ${error.message}`);
      // La aplicación sigue en funcionamiento
      return of(result as T);
    };
  }
}
