import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TotalCost } from './interface/total-cost';
import { Services } from './interface/services';
import { Reservation } from './interface/reservation';
import { User } from './interface/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private userSubject: BehaviorSubject<User>;
  // public user: Observable<User>;
  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {
    // this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    // this.user = this.userSubject.asObservable();
  }

 
  login(username: string, password: string) : Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/users/authenticate', { username, password }, 
    { 
      responseType: 'text'
    })
  }


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