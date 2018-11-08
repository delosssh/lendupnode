import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material';

import { ClientPaymentService } from '../services/client-payment.service';
import { LoanService } from '../services/loan.service';
import { LoansDialogComponent } from '../client-list/loans-dialog.component';

@Component({
  selector: 'loans-dialog-child',
  templateUrl: './loans-dialog-child.component.html'
})
export class LoansDialogChildComponent {
  @Input('loanId') loanId: String;
  @Output('loan') loan = new EventEmitter<any>();
  loans: String = '0';

  constructor (
    private dialog: MatDialog,
    private clientPaymentService: ClientPaymentService
  ) {
    console.log('client-list-child constructor');
    // console.log(this.clientNumber);
  }

  ngOnInit() {
    console.log('loans-dialog-child : OnInit:  ' + this.loanId);
    this.getLoanPayments(this.loanId);
  }

  getLoanPayments(loanId: String) {
    console.log("loans-dialog-child : getLoanPayments: " + loanId);
    this.clientPaymentService.getLoanPayments(loanId)
      .subscribe (
        res => {
          // console.log(res);
          // console.dir(res);
          console.log('loans-dialog-child : getLoanPayments : subscribe: ' + loanId);
          var total = res.reduce( (sum, item) => sum + item.paidAmount, 0 );
          console.log(total);
          this.loans = res;
          // this.load.emit(res);
          this.loan.emit(total.toString());
        },
        error => {
          console.log(error)
          this.loans = '-1';
        }
      )
    //return clientNumber;
  }

  // openLoansDialog() {
  //   this.dialog.open(LoansDialogComponent, {
  //     data: { clientNumber: this.clientNumber }
  //   });
  // }
}