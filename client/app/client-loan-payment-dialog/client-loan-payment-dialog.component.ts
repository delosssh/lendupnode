import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DatePipe } from '@angular/common';

/** models */
import { ClientPaymentModel } from '../models/clientpayment.model';
import { LoanPaymentModel } from '../models/loan-payment.model';
import { LoanTransactionModel } from '../models/loan-transaction.model';

import { ClientPaymentService } from '../services/client-payment.service';
import { LoanService } from '../services/loan.service';
import { LoanModel } from '../models/loan.model';
import { ClientService } from '../services/client.service';
import { LoanTransactionService } from '../services/loan-transaction.service';
import { ClientModel } from '../models/client.model';

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
  client: ClientModel;
  lastPaymentDate: string;
  loanTransaction: LoanTransactionModel;

  constructor(
    private route: ActivatedRoute,
    private paymentService: ClientPaymentService,
    private loanService: LoanService,
    private clientService: ClientService,
    private datepipe: DatePipe,
    private loanTransactionService: LoanTransactionService,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
    this.payment = new LoanPaymentModel();

    // sample data;
    // this.payment.clientNumber = "PR0001";
    // this.payment.balanceAmount = 100000;
    // this.payment.interestRate = 2.5;

    // this.clientName = "Precy Evangelista";
    // this.todayDate = "2/Nov/2018";
    this.todayDate = new Date().toDateString();

    console.log('client-loan-dialog:constructor:data: ');
    console.dir(this.data);

    this.getClientLoanDetails(this.data.loan);
  }

  ngOnInit() {

  }

  save() {
    let creditAmount: number = 0;
    var newBalance: number = this.payment.newBalanceAmount;
    this.loanTransaction = new LoanTransactionModel();

    console.log(this.loan.balanceAmount);
    console.log(this.payment.newBalanceAmount);
    // this.payment.interestAmount = this
    this.payment.balanceAmount = Number(this.loan.balanceAmount);
    this.payment.paymentDate = new Date();
    this.loan.balanceAmount = this.payment.newBalanceAmount;
    // this.loan.balanceAmount = this.payment.balanceAmount;

    this.paymentService.addPayment(this.payment)
    .subscribe(
      res => {
        console.log('successfully saved!');
        this.loanService.editLoan(this.loan)
        .subscribe(
          res => {
            console.log('loan has been updated')
          },
          error => console.log(error)
        );

        this.loanTransaction.loanId = String(this.loan.loanId);
        this.loanTransaction.clientNumber = String(this.loan.clientNumber);
        this.loanTransaction.transactionId = "";
        this.loanTransaction.transactionDate = new Date();
        this.loanTransaction.transactionType = "PAYMENT";
        this.loanTransaction.transactionDescription = "Loan Payment";
        this.loanTransaction.salaryAmount = this.payment.cashWithdrawal;
        this.loanTransaction.interestAmount = this.payment.interestAmount;
        this.loanTransaction.releaseAmount = 0;
        this.loanTransaction.paymentAmount = this.payment.paymentAmount;
        this.loanTransaction.otherDescription = this.payment.miscellaneousItem;
        this.loanTransaction.otherAmount = this.payment.miscellaneousAmount;
        this.loanTransaction.cashoutAmount = this.payment.cashOut;
        this.loanTransaction.balanceAmount = newBalance;
        this.loanTransaction.debitAmount = 0;

        creditAmount = Number.parseFloat(this.payment.interestAmount.toString())
          + Number.parseFloat(this.payment.paymentAmount.toString())
          + Number.parseFloat(this.payment.miscellaneousAmount.toString());
        this.loanTransaction.creditAmount = creditAmount;

        this.loanTransactionService.add(this.loanTransaction)
        .subscribe(
          res => {
            console.log('loan transaction was saved for loan repayments ');
            console.log(res);
          },
          error => console.log(error)
        );

      },
      error => console.log(error)
    );
  }


  collection() {
    var collectionAmount: number;

    collectionAmount = Number.parseFloat(this.payment.interestAmount.toString())
      + Number.parseFloat(this.payment.paymentAmount.toString())
      + Number.parseFloat(this.payment.miscellaneousAmount.toString());

    return collectionAmount;
  }

  test() {
    return 100.00;
  }

  getClientLoanDetails(loan: LoanModel) {

    this.client = new ClientModel();
    this.client.clientNumber = loan.clientNumber;
    this.clientService.getClientByClientNumber(this.client)
    .subscribe(
      data => {
        this.client = data[0];
        console.dir(this.client);

        this.clientName = this.client.lastName + ', ' + this.client.firstName;
        this.payment.clientNumber = this.client.clientNumber;

      },
      error => console.log(error) 
    );

    this.loan = new LoanModel();
    this.loanService.getLoan(loan)
    .subscribe(
      data => {
        this.loan = data;
        this.payment.loanId = this.loan.loanId;

        // get loan last payment
        this.paymentService.getLoanPayments2(this.loan.loanId)
        .subscribe(
          data => {
            console.log('loan last payment');
            console.dir(data);
            try {
              this.lastPaymentDate = this.datepipe.transform( data[0].paymentDate, 'dd-MMM-yyyy');
            } catch (e) {
              this.lastPaymentDate = null;
            }
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );

  }

  interestAmount() {
    let balance: Number;
    let rate: Number;
    let amount: Number;

    // balance = this.payment.balanceAmount;
    balance = this.loan.balanceAmount;
    rate = this.payment.interestRate;
    // rate = this.loan.interestRate;
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
    let cashOut: number = Number(lessInterest) - Number(paymentAmount) - this.payment.miscellaneousAmount;
    this.payment.cashOut = cashOut;

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
