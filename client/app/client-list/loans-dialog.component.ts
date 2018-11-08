import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';

import { LoanModel } from '../models/loan.model';

import { LoanService } from '../services/loan.service';

@Component({
  selector: 'loans-dialog',
  templateUrl: './loans-dialog.component.html',
  styleUrls: ['./loans-dialog.component.scss']
})
export class LoansDialogComponent {

  loan: LoanModel;
  loans = [];
  loanPayments: Number = 0;

  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private loanService: LoanService
  ) {
    console.log('constructor was called');
  }

  ngOnInit() {
    console.log('ngOnInit was called');
    console.log('data: ' + this.data);
    console.dir('data dir: ' + this.data);
    console.dir('clientNumber: ' + this.data.clientNumber);
    this.clientLoans(this.data.clientNumber);
  }

  clientLoans(clientNumber) {
    this.loan = new LoanModel();
    this.loan.clientNumber = clientNumber;
    this.loanService.getLoans(this.loan)
    .subscribe(
      data => this.loans = data,
      error => console.log(error)
    );
  }
 
  // load(event) {
  //   console.log('getLoanPayments');
  //   console.log(event);
  //   this.loanPayments = 100;
  // }

  loanEvent(event) {
    console.log('loans-dialog: loanEvent: ' + event);
    this.loanPayments = event;
  }

  getBalance(principal, payment) {
    return principal - payment;
  }

  gotoDetails(loan) {
    console.log('loanId: ' + loan);
    console.dir(loan);

    this.router.navigate(['/loan-details', {id: loan._id}]);
  }
}