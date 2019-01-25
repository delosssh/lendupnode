import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { MatTableDataSource } from '@angular/material/table';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { MatDialog, MAT_DIALOG_DATA, MatTable } from '@angular/material';

import { LoanTransactionService } from '../services/loan-transaction.service';
import { LoanTransactionModel } from '../models/loan-transaction.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'loan-transaction-list',
  templateUrl: './loan-transaction-list.component.html',
  styleUrls: ['./loan-transaction-list.component.scss']
})
export class LoanTransactionListComponent implements OnInit {

  loanId: string;
  transactions = [];
  displayedColumns = [
    "transactionDate", "transactionType", "salaryAmount", 
    "interestAmount", "releaseAmount", "paymentAmount", "otherDescription", "otherAmount",
    "cashoutAmount", "balanceAmount"
  ];
  dataSource: LoanTransactionDataSource;

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
      data => {
        this.transactions = data;
        this.dataSource = new LoanTransactionDataSource(this.loanTransactionService, loanId);
      },
      error => console.log(error)
    );
  }
}


export class LoanTransactionDataSource extends DataSource<any> {

  // private transactionLesson = new BehaviorSubject<LoanTransactionModel[]>([]);

  constructor (private dataService: LoanTransactionService, private loanId: string) {
    super();
  }
 
  // connect(collectionViewer: CollectionViewer): Observable<LoanTransactionModel[]> {
  //   return this.transactionLesson.asObservable();
  // }

  // disconnect(collectionViewer: CollectionViewer): void {
  //   this.transactionLesson.complete();
  // }

  connect() : Observable<LoanTransactionModel[]> {
    return this.dataService.getList(this.loanId);
  }

  disconnect() : void {

  }

}