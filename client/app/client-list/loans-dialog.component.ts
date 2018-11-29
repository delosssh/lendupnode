import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LoanModel } from '../models/loan.model';

import { LoanService } from '../services/loan.service';

import { LoanPaymentDialogComponent } from '../loan-payments/loan-payment-dialog.component';
import { ClientLoanPaymentDialogComponent } from '../client-loan-payment-dialog/client-loan-payment-dialog.component';
import { ClientModel } from '../models/client.model';

@Component({
  selector: 'loans-dialog',
  templateUrl: './loans-dialog.component.html',
  styleUrls: ['./loans-dialog.component.scss']
})
export class LoansDialogComponent {

  client: ClientModel;
  loan: LoanModel;
  loans = [];
  loanPayments: Number = 0;

  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private loanService: LoanService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<LoansDialogComponent>
  ) {
    console.log('constructor was called');
  }

  ngOnInit() {
    console.log('ngOnInit was called');
    console.log('data: ' + this.data);
    console.dir('data dir: ' + this.data);
    console.dir('clientNumber: ' + this.data.client.clientNumber);
    this.client = this.data.client;
    this.clientLoans(this.data.client.clientNumber);
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

  showAddPayment(loan) {
    this.dialog.open(ClientLoanPaymentDialogComponent, {
      data: { loan: loan }
    });     
  }

  showNewLoan() {
    this.router.navigate(['/add-new-regular-loan', { id: this.client._id }]);
  }

  showPaymentSchedule(loan) {
    this.dialogRef.close();
    this.router.navigate(['/payment-schedule-list', { loanId: loan.loanId } ]);
  }
}