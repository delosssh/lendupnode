import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { PaymentScheduleModel } from '../models/payment-schedule.model';

@Component({
  selector: 'payment-schedule-dialog',
  templateUrl: './payment-schedule-dialog.component.html',
  styles: ['./payment-schedule-dialog.component.scss']
})
export class PaymentScheduleDialogComponent {

  paymentSchedule: PaymentScheduleModel;
  paymentSchedules: PaymentScheduleModel[];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
    this.paymentSchedules = data.paymentSchedules;
  }

  ngOnInit() {}

}