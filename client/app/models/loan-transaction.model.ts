import { BaseModel } from './base.model';

export class LoanTransactionModel extends BaseModel {

  clientNumber: string;
  loanId: string;
  transactionId: string;
  transactionDate: Date;
  transactionType: string;
  transactionDescription: string;
  salaryAmount: number;
  interestAmount: number;
  releaseAmount: number;
  paymentAmount: number;
  otherDescription: string;
  otherAmount: number;
  cashoutAmount: number;
  balanceAmount: number;
  debitAmount: number;
  creditAmount: number;

}