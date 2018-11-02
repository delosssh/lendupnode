import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import {} from '@angular/material';

/** models */
import { ClientPaymentModel } from '../models/clientpayment.model';
import { LoanPaymentModel } from '../models/loan-payment.model';

import { ClientPaymentService } from '../services/client-payment.service';
// import Client from '../../../server/models/client';

@Component({
  selector: 'loan-payment',
  templateUrl: './loan-payment.component.html',
  styleUrls: ['./loan-payment.component.scss']
})
export class LoanPaymentComponent implements OnInit {

  clientName: String;
  todayDate: String;
  payment: LoanPaymentModel;

  constructor(
    private route: ActivatedRoute,
    private paymentService: ClientPaymentService
  ) {
    this.payment = new LoanPaymentModel();

    // sample data;
    this.payment.clientNumber = "PR0001";
    this.payment.balanceAmount = 100000;
    this.payment.interestRate = 2.5;

    this.clientName = "Precy Evangelista";
    this.todayDate = "2/Nov/2018";
  }

  ngOnInit() {

  }

  test() {
    return 100.00;
  }

  interestAmount() {
    let balance: Number;
    let rate: Number;
    let amount: Number;

    balance = this.payment.balanceAmount;
    rate = this.payment.interestRate;
    amount = Number(balance) * ( Number(rate) /  100);
    this.payment.interestAmount = Number(balance) * ( Number(rate) / 100);

    return this.payment.interestAmount;
  }

  lessInterestAmount() {
    let balance: Number = this.payment.balanceAmount;
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
    let balance: Number = this.payment.balanceAmount;
    let paymentAmount: Number = this.payment.paymentAmount;
    
    this.payment.newBalanceAmount = Number(balance) - Number(paymentAmount);

    return this.payment.newBalanceAmount;
  }

}
