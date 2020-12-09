import { Injectable } from '@angular/core';
import { Projetos } from './../models/projetos';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjetosService {
  url = 'http://localhost:3000/projetos';

constructor(private HttpClient: HttpClient) { }
  // headers
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  // Mostra todos os voluntarios
getProj(): Observable<Projetos[]>{
  return this.HttpClient.get<Projetos[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )

} // fim do getProj

// Obter projeto pelo id
getProjId(id: number): Observable<Projetos>{
  return this.HttpClient.get<Projetos>(this.url + '/' + id)
  .pipe(
    retry(2),
    catchError(this.handleError)
  )
} // fim do getProjId

// salvar projeto
saveProj(proj: Projetos): Observable<Projetos>{
  return this.HttpClient.post<Projetos>(this.url, JSON.stringify(proj), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
} // fim do saveProj

// atualizar projeto
updateProj(proj: Projetos): Observable<Projetos>{
  return this.HttpClient.put<Projetos>(this.url + '/' + proj.id, JSON.stringify(proj), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
} // fim do updateProj

// apagar projeto
deleteProj (proj: Projetos){
  return this.HttpClient.delete<Projetos>(this.url + '/' + proj.id, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
} // fim do deleteProj

// tratamento de erros
handleError(error: HttpErrorResponse){
  let msgError = '';
  if(error.error instanceof ErrorEvent){
    // erro do usuario
    msgError = error.error.message;
  }else{
    // erro no servidor
    msgError = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
  }
  return throwError(msgError);

}; // fim do tratamento


} // fim do service
