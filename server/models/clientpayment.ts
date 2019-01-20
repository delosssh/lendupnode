import * as mongoose from 'mongoose';

const clientPaymentSchema = new mongoose.Schema({
  loanId: String,
  clientNumber: String,
  dueAmount: Number,
  dueDate: Date,
  paidAmount: Number,
  paidDate: Date,
  balanceAmount: Number,
  interestRate: Number,
  interestAmount: Number,
  cashWithdrawal: Number,
  lessInterestAmount: Number,
  miscellaneousItem: String,
  miscellaneousAmount: Number,
  paymentAmount: Number,
  newBalanceAmount: Number,
  paymentDate: Date,
  lastPaymentAmount: Number,
  lastPaymentDate: Date
});

clientPaymentSchema.post('save', function(next) {
  console.log('clientpayments.ts models');
  // next();
})

const ClientPayment = mongoose.model('ClientPayment', clientPaymentSchema);

export default ClientPayment;
