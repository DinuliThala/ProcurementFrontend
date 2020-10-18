import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Requisiton} from '../models/Requisiton';
import {Supplier} from '../models/Supplier';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private readonly uri = 'http://localhost:3001';

  private apiData = new BehaviorSubject<any>(null);
  public apiData$ = this.apiData.asObservable();

  constructor(private http: HttpClient) { }

  login(email, password): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.uri + '/login', { email, password }, {headers})
      .pipe(catchError(this.errorHandler));

  }

  supplierLogin(email, password): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.uri + '/supplier/login', { email, password }, {headers})
      .pipe(catchError(this.errorHandler));

  }

  viewAllSuppliers(): Observable<Supplier[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // API Call
    return this.http
      .get<Supplier[]>(this.uri + `/supplier/getall`, {
        headers
      })
      .pipe(catchError(this.errorHandler));
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

  // tslint:disable-next-line:variable-name
  addPayment(payee, payment_date, payer, payed_on, remark, invoice): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.uri + '/payment/addpayment', { payee, payment_date, payer, payed_on, remark, invoice }, {headers})
      .pipe(catchError(this.errorHandler));
  }

  addInvoice(title, description, document): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.uri + '/payment/addpayment', { title, description, document }, {headers})
      .pipe(catchError(this.errorHandler));
  }

  getAllInvoices(): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // API Call
    return this.http
      .get<Requisiton[]>(this.uri + `/invoice/getall`, {
        headers
      })
      .pipe(catchError(this.errorHandler));
  }

  // tslint:disable-next-line:variable-name
  getInvoiceById(invoice_id): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.uri + '/invoice/getbyid', { invoice_id }, {headers})
      .pipe(catchError(this.errorHandler));
  }

  getAllPayments(): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // API Call
    return this.http
      .get<Requisiton[]>(this.uri + `/payment/getall`, {
        headers
      })
      .pipe(catchError(this.errorHandler));
  }

  // tslint:disable-next-line:variable-name
  getPaymentsById(payment_id): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.uri + '/payment/getbyid', { payment_id }, {headers})
      .pipe(catchError(this.errorHandler));
  }

  getAllSites(): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // API Call
    return this.http
      .get<Requisiton[]>(this.uri + `/site/getall`, {
        headers
      })
      .pipe(catchError(this.errorHandler));
  }

  // tslint:disable-next-line:variable-name
  getSiteByid(site_id): any{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.uri + '/site/getbyid', { site_id }, {headers})
      .pipe(catchError(this.errorHandler));
  }

// Pass data from one component to another
  setData(data): any{
    this.apiData.next(data);
  }

  // tslint:disable-next-line:typedef
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error.msg || 'Something went wrong!');
  }
}
