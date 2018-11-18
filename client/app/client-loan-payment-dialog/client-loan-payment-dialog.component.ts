import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';

/** models */
import { ClientPaymentModel } from '../models/clientpayment.model';
import { LoanPaymentModel } from '../models/loan-payment.model';

import { ClientPaymentService } from '../services/client-payment.service';
import { LoanService } from '../services/loan.service';
import { LoanModel } from '../models/loan.model';
// import Client from '../../../server/models/client';

@Component({
  selector: 'client-loan-payment-dialog',
  templateUrl: './client-loan-payment-dialog.component.html',
  styleUrls: ['./client-loan-payment-dialog.component.scss']
})
export class ClientLoanPaymentDialogComponent implements OnInit {

  loan: LoanModel;
  clientName: String;
  todayDate: String;
  payment: LoanPaymentModel;

  constructor(
    private route: ActivatedRoute,
    private paymentService: ClientPaymentService,
    private loanService: LoanService,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
    this.payment = new LoanPaymentModel();

    // sample data;
    this.payment.clientNumber = "PR0001";
    // this.payment.balanceAmount = 100000;
    // this.payment.interestRate = 2.5;

    this.clientName = "Precy Evangelista";
    this.todayDate = "2/Nov/2018";

    console.log('client-loan-dialog:constructor:data: ');
    console.dir(this.data);

    this.getClientLoanDetails(this.data.loan);
  }

  ngOnInit() {

  }

  test() {
    return 100.00;
  }

  getClientLoanDetails(loan) {
    this.loan = new LoanModel();
    this.loanService.getLoan(loan)
    .subscribe(
      data => this.loan = data,
      error => console.log(error)
    );

  }

  interestAmount() {
    let balance: Number;
    let rate: Number;
    let amount: Number;

    // balance = this.payment.balanceAmount;
    balance = this.loan.balanceAmount;
    // rate = this.payment.interestRate;
    rate = this.loan.interestRate;
    amount = Number(balance) * ( Number(rate) /  100);
    this.payment.interestAmount = Number(balance) * ( Number(rate) / 100);

    return this.payment.interestAmount;
  }

  lessInterestAmount() {
    // let balance: Number = this.payment.balanceAmount;
    let balance: Number = this.loan.balanceAmount;
    let cashWithdrawal: Number = this.payment.cashWithdrawal;
    let interestAmount: Number = this.payment.interestAmount;
    let lessInterestAmount: Number;

    this.payment.lessInterestAmount = Number(cashWithdrawal) - Number(interestAmount);
    
    return this.payment.lessInterestAmount;
  }

  cashOut() {
    let lessInterest: Number = this.lessInterestAmount();
    let paymentAmount: Number = this.payment.paymentAmount;
    let cashOut: Number = Number(lessInterest) - Number(paymentAmount);

    return cashOut;
  }

  newBalance() {
    // let balance: Number = this.payment.balanceAmount;
    let balance: Number = this.loan.balanceAmount;
    let paymentAmount: Number = this.payment.paymentAmount;
    
    this.payment.newBalanceAmount = Number(balance) - Number(paymentAmount);

    return this.payment.newBalanceAmount;
  }

}
