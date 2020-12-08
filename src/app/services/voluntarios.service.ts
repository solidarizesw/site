import { Injectable } from '@angular/core';
import { Voluntarios } from './../models/voluntarios';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
 url = 'http://localhost:3000/voluntarios';

constructor(private HttpClient: HttpClient) { }
  // headers
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }// fim do httpOptions

  // Mostra todos os voluntarios
getVolunt(): Observable<Voluntarios[]>{
  return this.HttpClient.get<Voluntarios[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )

} // fim do getVolunt

// Obter voluntario pelo id
getVoluntId(id: number): Observable<Voluntarios>{
  return this.HttpClient.get<Voluntarios>(this.url + '/' + id)
  .pipe(
    retry(2),
    catchError(this.handleError)
  )
} // fim do getVoluntId

// salvar voluntario
saveVolunt(volunt: Voluntarios): Observable<Voluntarios>{
  return this.HttpClient.post<Voluntarios>(this.url, JSON.stringify(volunt), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
} // fim do saveVolunt

// atualizar voluntario
updateVolunt(volunt: Voluntarios): Observable<Voluntarios>{
  return this.HttpClient.put<Voluntarios>(this.url + '/' + volunt.id, JSON.stringify(volunt), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
} // fim do updateVolunt

// apagar voluntario
deleteVolunt (volunt: Voluntarios){
  return this.HttpClient.delete<Voluntarios>(this.url + '/' + volunt.id, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
} // fim do deleteVolunt

// tratamento de erros
handleError(error: HttpErrorResponse){
  let msgError = '';
  if(error.error instanceof ErrorEvent){
    // erro do voluntario
    msgError = error.error.message;
  }else{
    // erro no servidor
    msgError = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
  }
  return throwError(msgError);

}; // fim do tratamento

} // fim da classe
