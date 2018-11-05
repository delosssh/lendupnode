import { Component, OnInit, Directive, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material'

import { AuthService } from '../services/auth.service';
import { ClientService } from '../services/client.service';
import { LoanService } from '../services/loan.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { ClientModel } from '../models/client.model';
import { LoansDialogComponent } from './loans-dialog.component';

// import { ClientListChildComponent } from './client-list-child.component';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent {
 
  client: ClientModel;
  clients = [];
  clientsCopy = [];
  clientNumber:String = "AnCdEf";
  dataSource: DataSource<any>;
  loan: Number;
  searchTerm: String;

  public constructor (
    private http: Http,
    private router: Router,
    private dialog: MatDialog,
    private auth: AuthService,
    private clientService: ClientService,
    private loanService: LoanService
  ) {
    this.client = new ClientModel();
  }

  ngOnInit() {
    if(this.auth.loggedIn) {
      this.clientService.getClients()
      .subscribe(
        data => {
          this.clients = data;
          this.clientsCopy = data;
          this.dataSource = data;
        },
        error => console.log(error)
      );
    } else {
      this.router.navigate(['/login']);
    }

  }

  details(id: String) {
    this.router.navigate(['/client-detail', { id: id }]);
  }

  save() {
    console.log(this.client.firstName);
    this.clientService.addClient(this.client)
      .subscribe(
        res => {
          // console.log('new client was added');
          this.router.navigate(['client-list']);
        },
        error => console.log(error)
      );

  }

  openLoansDialog(clientNumber) {
    this.dialog.open(LoansDialogComponent, {
      data: { clientNumber: clientNumber }
    });
  }

  loans(event) {
    console.log('loans');
    console.dir(event);
    // this.loan = event;
    this.client.loans = event;
  }

  search(): void {
    let term = this.searchTerm;
    this.clients = this.clientsCopy.filter(function(tag) {
      return tag.firstName.toLowerCase().indexOf(term.toLowerCase()) >= 0;
      // return tag.firstName.indexOf(term) >= 0;
    });
  }

}


import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchClient'
})

@Injectable()
export class SearchClientFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if(!items) return [];
    return items.filter(it => it[field] == value);
  }
}