import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { People } from '../modelos/people';

const endpoint = 'https://swapi.dev/api/';

@Injectable({
  providedIn: 'root'
})


export class HttpService {

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }


  getPeople(): Observable<any> {
    return this.http.get<People>(endpoint + 'people/').pipe(
      catchError(this.handleError)
    );
  }
}
