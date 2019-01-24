import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoanTransactionService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }
  
  add(loanTransaction): Observable<any> {
    return this.http.post('/api/loantransaction', JSON.stringify(loanTransaction), this.options);
  }

  getList(loanId: string): Observable<any> {
    return this.http.get(`/api/loantransaction/loan/${loanId}`).map(res => res.json());
  }
}