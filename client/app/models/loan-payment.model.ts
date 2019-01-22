import { BaseModel } from './base.model';

export class LoanPaymentModel extends BaseModel {
  loanId: String;
  clientNumber: String;
  balanceAmount: number = 0;
  interestRate: number = 0;
  interestAmount: number = 0;
  cashWithdrawal: number = 0;
  lessInterestAmount: number = 0;
  miscellaneousItem: string = 'none';
  miscellaneousAmount: number = 0;
  paymentAmount: number = 0;
  newBalanceAmount: number = 0;
  paymentDate: Date;
  cashOut: number = 0;
  lastUpdate: Date;
  creationDate: Date;
}