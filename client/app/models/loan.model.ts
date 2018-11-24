import { BaseModel } from './base.model';
import { PaymentSchedule } from './payment-schedule.model';

export class LoanModel extends BaseModel {
  loanId: String;
  clientNumber: String;
  principalAmount: Number;
  interestRate: Number;
  loanTypeId: String;
  paymentTypeId: String;
  applicationDate: Date;
  loanApproveDate: Date;
  releaseDate: Date;
  dueDate: Date;
  numberOfPayments: Number;
  paymentAmount: Number;
  paymentInterval: Number;
  loanProceed: String;
  needByDate: Date;
  balanceAmount: Number;
  totalPaymentAmount: Number;
  paymentSchedule: PaymentSchedule[];
  lastUpdate: Date;
  creationDate: Date;
}