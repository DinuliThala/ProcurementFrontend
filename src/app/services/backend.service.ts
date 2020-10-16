import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {User} from '../models/User';
import {Requisiton} from '../models/Requisiton';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private readonly uri = 'http://localhost:3001';


  constructor(private http: HttpClient) { }


  login(username, password): any {
  const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

  const params = new HttpParams()
      .set('email', username)
      .set('password', password);

  return this.http
      .post(this.uri + '/login', { headers, params })
      .pipe(catchError(this.errorHandler));

  }

  logout(): any {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  viewAllRequisition(): Observable<Requisiton[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // API Call
    return this.http
      .get<Requisiton[]>(this.uri + `/requisition/getall`, {
        headers
      })
      .pipe(catchError(this.errorHandler));
  }
  // Error Handler
  // tslint:disable-next-line:typedef
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error.msg || 'Something went wrong!');
  }
}
