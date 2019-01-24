import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

import { LoanTransactionService } from '../services/loan-transaction.service';

@Component({
  selector: 'loan-transaction-list',
  templateUrl: './loan-transaction-list.component.html',
  styleUrls: ['./loan-transaction-list.component.scss']
})
export class LoanTransactionListComponent implements OnInit {

  loanId: string;
  transactions = [];

  constructor(
    private route: ActivatedRoute,
    private loanTransactionService: LoanTransactionService
  ) {

  }

  ngOnInit() {

    this.route.params
      .subscribe(
        params => {
          this.loanId = params['loanId'];
          this.getLoanTransactions(this.loanId);
        }
      );

  }

  getLoanTransactions(loanId: string) {
    console.log(loanId);
    this.transactions = [];
    this.loanTransactionService.getList(loanId)
    .subscribe(
      data => this.transactions = data,
      error => console.log(error)
    );
  }
}