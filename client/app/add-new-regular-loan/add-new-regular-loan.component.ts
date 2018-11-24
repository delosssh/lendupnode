import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { ClientService } from '../services/client.service';
import { LoanService } from '../services/loan.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { ClientModel } from '../models/client.model';
import { LoanModel } from '../models/loan.model';
import { PaymentScheduleModel } from '../models/payment-schedule.model';
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

  public constructor (
    private clientService: ClientService,
    private dialog: MatDialog,
    private loanService: LoanService,
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
    // console.log(this.client.firstName);
    // this.clientService.addClient(this.client)
    //   .subscribe(
    //     res => {
    //       console.log('new client was added');
    //       this.router.navigate(['client-list']);
    //     },
    //     error => console.log(error)
    //   );

    this.calculatePaymentSchedule();

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
        this.router.navigate(['/client-detail', {id: this.client._id}]);
      },
      error => console.log(error)
    );
  }

  /**
   * loan type
   */
  loanTypeChangeEvent(event: any) {
    console.dir(event);
  }

  /** 
   * monthly installment
   * interest amount = balance amount * interest rate  
  */
  calculatePaymentSchedule() {
    let principalAmount: Number = this.loan.principalAmount;
    let interestRate: Number = Number(this.loan.interestRate) / 100;
    let numberOfPayments: Number = 12;
    let balanceAmount: Number = principalAmount;
    let monthlyInstallment: Number = Number(principalAmount) / Number(numberOfPayments);
    let interestAmount: Number = 0;
    var dueDate: Date;
    var dueDateTmp: Date;
    var dueDateTmp2: Date;
    var paymentInterval = 1;

    console.log('add-new-regular-loan:calculatePaymentSchedule: ' + this.loan.dueDate);

    dueDate = this.loan.dueDate;
    console.log(dueDate);

    for(var x = 1; x < (Number(numberOfPayments) + 1); x ++ ) {
      this.paymentSchedule = new PaymentScheduleModel();
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
      dueDate.setDate(dueDate.getDate() + paymentInterval);
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

    this.showPaymentSchedule(this.schedules);
  }

  showPaymentSchedule(schedules: PaymentScheduleModel[]) {
    var dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.data = { paymentSchedules: schedules };
    // dialogConfig.width = "400px";
    this.dialog.open(PaymentScheduleDialogComponent, dialogConfig);
  }
}