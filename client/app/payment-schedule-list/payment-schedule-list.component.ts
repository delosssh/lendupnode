import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentScheduleModel } from '../models/payment-schedule.model';
import { PaymentScheduleService } from '../services/payment-schedule.service';

@Component({
  selector: 'payment-schedule-list',
  templateUrl: 'payment-schedule-list.component.html',
  styleUrls: ['payment-schedule-list.component.scss'],
})
export class PaymentScheduleListComponent {

  paymentSchedule: PaymentScheduleModel;
  paymentSchedules = [];
  loanId: String;

  public constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private paymentScheduleService: PaymentScheduleService,
  ) {
    this.paymentSchedule = new PaymentScheduleModel();
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      params => {
        this.loanId = params['loanId'];
        this.getPaymentSchedules(this.loanId);
        console.log('payment-schedule-list.component:OnInit: ' + this.loanId);
      }
    );
  }

  getPaymentSchedules(loanId: String) {
    this.paymentScheduleService.getByLoanId(loanId)
    .subscribe (
      data => this.paymentSchedules = data,
      error => console.log(error)
    );
  }

}