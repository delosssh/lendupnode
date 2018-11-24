import { BaseModel } from "./base.model";

export class PaymentScheduleModel extends BaseModel {
  loanId: String;
  paymentNumber: Number;
  dueAmount: Number;
  dueDate: Date;
  installmentAmount: Number;
  interestAmount: Number;
  principalAmount: Number;
  balanceAmount: Number;
}