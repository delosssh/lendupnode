import * as mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  clientNumber: String,
  loanId: String,
  transactionId: String,
  transactionDate: Date,
  transactionType: String,
  transactionDescription: String,
  salaryAmount: Number,
  interestAmount: Number,
  releaseAmount: Number,
  paymentAmount: Number,
  otherDescription: String,
  otherAmount: Number,
  cashoutAmount: Number,
  balanceAmount: Number,
  debitAmount: Number,
  creditAmount: Number,
  createDate: Date,
  lastUpdate: Date,

});

const Transaction = mongoose.model('loan-transaction', transactionSchema);

export default Transaction;