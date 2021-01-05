import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBrood } from './brood';
import { IBeleg } from './beleg';
import { ISaus } from './saus';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BroodjeszaakService {

  private getAllBroodUrl: string = "http://localhost:7070/api/brood";
  private getBroodByIdUrl: string = "http://localhost:7070/api/brood/";

  private getAllBelegUrl: string = "http://localhost:7071/api/beleg";
  private getBelegByIdUrl: string = "http://localhost:7071/api/beleg/";

  private getAllSausUrl: string = "http://localhost:7072/api/saus";
  private getSausByIdUrl: string = "http://localhost:7072/api/saus/";

  constructor(private http:HttpClient) { }

  getAllBrood() : Observable<IBrood[]>{
    return this.http.get<IBrood[]>(this.getAllBroodUrl)
      .pipe(
        catchError(error => {
          return throwError(error.message);
        })
      );
  }

  getBroodById(id: number){
    return this.http.get<IBrood>(this.getBroodByIdUrl + id)
                 .pipe(
                   catchError(error => {
                     return throwError(error.message);
                   })
                 );
  }


  getAllBeleg() : Observable<IBeleg[]>{
    return this.http.get<IBeleg[]>(this.getAllBelegUrl)
      .pipe(
        catchError(error => {
          return throwError(error.message);
        })
      );
  }

  getBelegById(id: number){
    return this.http.get<IBeleg>(this.getBelegByIdUrl + id)
     .pipe(
       catchError(error => {
         return throwError(error.message);
       })
     );
  }

  getAllSaus() : Observable<ISaus[]>{
    return this.http.get<ISaus[]>(this.getAllSausUrl)
      .pipe(
        catchError(error => {
          return throwError(error.message);
        })
      );
  }

  getSausById(id: number){
    return this.http.get<ISaus>(this.getSausByIdUrl + id)
       .pipe(
         catchError(error => {
           return throwError(error.message);
         })
       );
  }

}
