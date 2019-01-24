import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { ClientService } from '../services/client.service';
import { LoanService } from '../services/loan.service';
import { PaymentScheduleService } from '../services/payment-schedule.service';
import { LoanTransactionService } from '../services/loan-transaction.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { ClientModel } from '../models/client.model';
import { LoanModel } from '../models/loan.model';
import { PaymentScheduleModel } from '../models/payment-schedule.model';
import { LoanTransactionModel } from '../models/loan-transaction.model';
import { PaymentScheduleDialogComponent } from '../payment-schedule-dialog/payment-schedule-dialog.component';

@Component({
  selector: 'add-new-regular-loan',
  templateUrl: './add-new-regular-loan.component.html',
  styleUrls: ['./add-new-regular-loan.component.scss']
})
export class AddNewRegularLoanComponent {
 
  client: ClientModel;
  loan: LoanModel;
  paymentSchedule: PaymentScheduleModel;
  schedules = [];
  paymentInterval: number;
  loanTransaction: LoanTransactionModel;

  public constructor (
    private clientService: ClientService,
    private dialog: MatDialog,
    private loanService: LoanService,
    private paymentScheduleService: PaymentScheduleService,
    private loanTransactionService: LoanTransactionService,
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.client = new ClientModel();
    this.loan = new LoanModel();
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      params => {
        this.client._id = params['id'];

        this.loadClient(this.client);
      }
    );
  }

  loadClient(client: ClientModel) {
    this.clientService.getClient(client)
    .subscribe(
      data => this.client = data,
      error => console.log(error)
    )
  }

  save() {
    this.loanTransaction = new LoanTransactionModel();
    // console.log(this.client.firstName);
    // this.clientService.addClient(this.client)
    //   .subscribe(
    //     res => {
    //       console.log('new client was added');
    //       this.router.navigate(['client-list']);
    //     },
    //     error => console.log(error)
    //   );

    this.loan.loanId = this.randomString();
    console.log('save: ' + this.loan.loanId);


    // this.calculatePaymentSchedule();
    this.calculatePayment();

    // var paymentSchedule: PaymentScheduleModel = new PaymentScheduleModel();
    // paymentSchedule.loanId = this.loan.loanId;
    // paymentSchedule.dueAmount = 200000;

    this.loan.clientNumber = this.client.clientNumber;
    this.loan.balanceAmount = this.loan.principalAmount;
    this.loan.paymentSchedule = [];
    // this.loan.paymentSchedule.push(paymentSchedule);
    this.loan.paymentSchedule = this.schedules;
    this.loanService.addLoan(this.loan)
    .subscribe(
      res => {
        console.log('adding new loan');
        console.dir(res);
        // this.router.navigate(['/client-detail', {id: this.client._id}]);

        // record new RELPRINCIPAL transaction
        this.loanTransaction.loanId = String(this.loan.loanId);
        this.loanTransaction.clientNumber = String(this.loan.clientNumber);
        this.loanTransaction.transactionId = "";
        this.loanTransaction.transactionDate = new Date();
        this.loanTransaction.transactionType = "RELPRIN";
        this.loanTransaction.transactionDescription = "Principal Released";
        this.loanTransaction.salaryAmount = 0;
        this.loanTransaction.interestAmount = 0;
        this.loanTransaction.releaseAmount = Number(this.loan.principalAmount);
        this.loanTransaction.paymentAmount = 0;
        this.loanTransaction.otherDescription = "";
        this.loanTransaction.otherAmount = 0;
        this.loanTransaction.cashoutAmount = Number(this.loan.principalAmount);
        this.loanTransaction.debitAmount = Number(this.loan.principalAmount);
        this.loanTransaction.balanceAmount = Number(this.loan.balanceAmount);
        this.loanTransaction.creditAmount = 0;

        this.loanTransactionService.add(this.loanTransaction)
        .subscribe(
          res => {
            console.log('loan transaction was saved ');
            console.log(res);
          },
          error => console.log(error)
        );

        this.paymentScheduleService.add(this.schedules)
        .subscribe(
          res => {
            console.log('payment schedules added');
            this.router.navigate(['/client-detail', {id: this.client._id}]);
          },
          error => console.log(error)
        );

      },
      error => console.log(error)
    );
  }

  /**
   * loan type
   */
  loanTypeChangeEvent(event: any) {
    var multiplier: number;
    console.dir(event);

    switch (event.value) {
      case 'dai':
        this.loan.numberOfPayments = 80;
        this.paymentInterval = 1;
        break;
      case 'wek':
        this.loan.numberOfPayments = 8;
        this.paymentInterval = 7;
        this.loan.loanTypeInterestRate = Number(this.loan.interestRate) / 4;
        break;
      case 'bwe':
        this.loan.numberOfPayments = 4;
        this.paymentInterval = 14;
        this.loan.loanTypeInterestRate = Number(this.loan.interestRate) / 2;
        break;
      case 'mon':
        this.loan.numberOfPayments = 2;
        this.paymentInterval = 28;
        this.loan.loanTypeInterestRate = this.loan.interestRate;
        break;
      case 'one':
        this.loan.numberOfPayments = 1;
        this.paymentInterval = 56;
        this.loan.loanTypeInterestRate = this.loan.interestRate;
        break;
      default:
        this.loan.numberOfPayments = 0;
        this.paymentInterval = 0;
        break;
    }

    multiplier = this.loan.numberOfPayments * this.paymentInterval;

    this.updateMaturityDate(multiplier);

  }

  updateMaturityDate(mult: number) {
    var _newDate: Date;

    _newDate = new Date();
    _newDate.setDate( this.loan.releaseDate.getDate() + mult);
    this.loan.maturityDate = _newDate;
  }

  calculatePayment() {

    switch (this.loan.paymentTypeId) {
      case 'dai':
        this.calculatePaymentScheduleDaily();
        break;
      case 'wek':
      case 'bwe':
      case 'mon':
        this.calculatePaymentSchedule();
        break;
      case 'one':
      default:
        break;
    }

  }

  /** 
   * monthly installment
   * interest amount = balance amount * interest rate  
  */
  calculatePaymentSchedule() {
    let principalAmount: Number = this.loan.principalAmount;
    // let interestRate: Number = Number(this.loan.interestRate) / 100;
    let interestRate: Number = Number(this.loan.loanTypeInterestRate) / 100;
    let numberOfPayments: Number = this.loan.numberOfPayments // 12;
    let balanceAmount: Number = principalAmount;
    let monthlyInstallment: Number = Number(principalAmount) / Number(numberOfPayments);
    let interestAmount: Number = 0;
    var dueDate: Date;
    var dueDateTmp: Date;
    var dueDateTmp2: Date;
    var paymentInterval = Number(this.paymentInterval);

    console.log('add-new-regular-loan:calculatePaymentSchedule: ' + this.loan.dueDate);

    // dueDate = this.loan.dueDate;
    // dueDate = this.loan.releaseDate;
    dueDate = new Date(this.loan.releaseDate.getFullYear(), this.loan.releaseDate.getMonth(), this.loan.releaseDate.getDate(), 0, 0, 0);
    console.log(dueDate);

    // empty this.schedules
    this.schedules = [];

    for(var x = 1; x < (Number(numberOfPayments) + 1); x ++ ) {
      this.paymentSchedule = new PaymentScheduleModel();
      this.paymentSchedule.loanId = this.loan.loanId;
      this.paymentSchedule.paymentNumber = x;

      if (x == 0) {
        this.paymentSchedule.balanceAmount = balanceAmount;
      } else {
        interestAmount = Number(balanceAmount) * Number(interestRate);
        balanceAmount = Number(balanceAmount) - Number(monthlyInstallment);
        
        this.paymentSchedule.balanceAmount = balanceAmount;
        this.paymentSchedule.installmentAmount = monthlyInstallment;
        this.paymentSchedule.interestAmount = interestAmount;
      }
      dueDate.setDate(dueDate.getDate() + paymentInterval);
      console.log('1: ' + dueDate);
      console.log('1a: ' + dueDate.getFullYear());
      console.log('1b: ' + (dueDate.getMonth()+1));
      // console.log('1c: ' + dueDate.getDay());
      console.log('1d: ' + dueDate.getDate());
      dueDateTmp = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate(), 0, 0, 0);
      // dueDateTmp.setDate(dueDate.getDate());
      console.log('2: ' + dueDateTmp);
      this.paymentSchedule.dueDate = dueDateTmp;
      this.schedules.push(this.paymentSchedule);
      // dueDate.setDate(dueDate.getDate() + paymentInterval);
      console.log('3: ' + x);
      // dueDate.setDate(dueDate.getDate() + paymentInterval);

      console.log('4: ' + dueDate);
      // console.log('5a: ' + dueDate.getFullYear());
      // console.log('5b: ' + dueDate.getMonth());
      // console.log('5c: ' + dueDate.getDay());
      // console.log('5d: ' + dueDate.getDate());

      dueDateTmp2 = new Date(dueDate.getFullYear(), dueDate.getMonth()+1, dueDate.getDate(), 0, 0, 0);
      console.log('6: ' + dueDateTmp2);
    }

    console.dir(this.schedules);
    this.loan.maturityDate = dueDateTmp;

    // this.showPaymentSchedule(this.schedules);
  }

  calculatePaymentScheduleDaily() {
    let principalAmount: Number = this.loan.principalAmount;
    let interestRate: Number = Number(this.loan.interestRate) / 100;
    let numberOfPayments: Number = this.loan.numberOfPayments // 12;
    let balanceAmount: Number = principalAmount;
    let monthlyInstallment: Number = Number(principalAmount) / Number(numberOfPayments);
    let interestAmount: Number = 0;
    var dueDate: Date;
    var dueDateTmp: Date;
    var dueDateTmp2: Date;
    var paymentInterval = Number(this.paymentInterval);
    var months: Number;
    var appliedInterestRate: Number;

    console.log('interestRate');
    console.log(interestRate);

    // calculate the number of months based on 30 days per month
    months = Number(numberOfPayments) / 30;
    console.log('months: ');
    console.log(months);

    // calculate applicable interest rate
    appliedInterestRate = Number(months) * Number(interestRate);
    console.log('appliedInterestRate: ');
    console.log(appliedInterestRate);

    // calculate interest amount per payment interval
    interestAmount = (Number(principalAmount) * Number(appliedInterestRate)) / Number(numberOfPayments);
    console.log('interestAmount: ');
    console.log(interestAmount);

    // console.log('add-new-regular-loan:calculatePaymentSchedule: ' + this.loan.dueDate);

    // dueDate = this.loan.dueDate;
    // dueDate = this.loan.releaseDate;
    dueDate = new Date(this.loan.releaseDate.getFullYear(), this.loan.releaseDate.getMonth(), this.loan.releaseDate.getDate(), 0, 0, 0);
    console.log(dueDate);

    // empty this.schedules
    this.schedules = [];

    for(var x = 1; x < (Number(numberOfPayments) + 1); x ++ ) {
      this.paymentSchedule = new PaymentScheduleModel();
      this.paymentSchedule.paymentNumber = x;

      if (x == 0) {
        this.paymentSchedule.balanceAmount = balanceAmount;
      } else {
        // interestAmount = Number(balanceAmount) * Number(interestRate);
        balanceAmount = Number(balanceAmount) - Number(monthlyInstallment);
        
        this.paymentSchedule.balanceAmount = balanceAmount;
        this.paymentSchedule.installmentAmount = monthlyInstallment;
        this.paymentSchedule.interestAmount = interestAmount;
      }
      dueDate.setDate(dueDate.getDate() + paymentInterval);
      // console.log('1: ' + dueDate);
      // console.log('1a: ' + dueDate.getFullYear());
      // console.log('1b: ' + (dueDate.getMonth()+1));
      // console.log('1c: ' + dueDate.getDay());
      // console.log('1d: ' + dueDate.getDate());
      dueDateTmp = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate(), 0, 0, 0);
      // dueDateTmp.setDate(dueDate.getDate());
      // console.log('2: ' + dueDateTmp);
      this.paymentSchedule.dueDate = dueDateTmp;
      this.schedules.push(this.paymentSchedule);
      // dueDate.setDate(dueDate.getDate() + paymentInterval);
      // console.log('3: ' + x);
      // dueDate.setDate(dueDate.getDate() + paymentInterval);

      // console.log('4: ' + dueDate);
      // console.log('5a: ' + dueDate.getFullYear());
      // console.log('5b: ' + dueDate.getMonth());
      // console.log('5c: ' + dueDate.getDay());
      // console.log('5d: ' + dueDate.getDate());

      dueDateTmp2 = new Date(dueDate.getFullYear(), dueDate.getMonth()+1, dueDate.getDate(), 0, 0, 0);
      // console.log('6: ' + dueDateTmp2);
    }

    console.dir(this.schedules);
    this.loan.maturityDate = dueDateTmp;

    this.showPaymentSchedule(this.schedules);
  }

  showPaymentSchedule(schedules: PaymentScheduleModel[]) {
    var dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.data = { paymentSchedules: schedules };
    // dialogConfig.width = "400px";
    this.dialog.open(PaymentScheduleDialogComponent, dialogConfig);
  }

  randomString() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    var string_length = 6;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum,rnum+1);
    }
    return randomstring;
  }


}