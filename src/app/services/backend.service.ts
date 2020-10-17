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

  login(email, password): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.uri + '/login', { email, password }, {headers})
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

  addBid(amount, description, requisitionId, supplierId): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.uri + '/bid/add', { amount, description, requisitionId, supplierId }, {headers})
      .pipe(catchError(this.errorHandler));
  }

  viewAllBids(): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // API Call
    return this.http
      .get<Requisiton[]>(this.uri + `/bid/getall`, {
        headers
      })
      .pipe(catchError(this.errorHandler));
}

  viewBidsForSupplier(supplierId): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.uri + '/bid/getallbysupplier', { supplierId }, {headers})
      .pipe(catchError(this.errorHandler));

}

  // tslint:disable-next-line:typedef
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error.msg || 'Something went wrong!');
  }
}
