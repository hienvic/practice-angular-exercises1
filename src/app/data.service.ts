import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TotalCost } from './interface/total-cost';
import { Services } from './interface/services';
import { Reservation } from './interface/reservation';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private httpClient: HttpClient) { }

  public sendGetRequestTotalCost(url: string){
    return this.httpClient.get<TotalCost[]>(url, {  params: new HttpParams(), observe: "response"});
  }

  public sendGetRequestServicesBreakdown(url: string){
    return this.httpClient.get<Services[]>(url, {  params: new HttpParams(), observe: "response"});
  }

  public sendGetRequestReservation(url: string){
    return this.httpClient.get<Reservation[]>(url, {  params: new HttpParams(), observe: "response"});
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}