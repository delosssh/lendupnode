import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class LoanApplicationService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  
  private data;

  constructor(
    private http: Http,
    private router: Router,
  ) {}

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  add(loanApplication): Observable<any> {
    return this.http.post('/api/loanapplication', JSON.stringify(loanApplication), this.options);
  }

}