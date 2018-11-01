import { BaseModel } from './base.model';

export class LoanPaymentModel extends BaseModel {
  loanId: String;
  clientNumber: String;
  balanceAmount: Number = 0;
  interestRate: Number = 0;
  interestAmount: Number = 0;
  cashWithdrawal: Number = 0;
  lessInterestAmount: Number = 0;
  paymentAmount: Number = 0;
  newBalanceAmount: Number = 0;
  paymentDate: Date;
  lastUpdate: Date;
  creationDate: Date;
}