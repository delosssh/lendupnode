import * as mongoose from 'mongoose';

const paymentScheduleSchema = new mongoose.Schema({
  loanId: String,
  paymentNumber: Number,
  dueAmount: Number,
  dueDate: Date,
  installmentAmount: Number,
  interestAmount: Number,
  principalAmount: Number,
  balanceAmount: Number
});

const PaymentSchedule = mongoose.model('PaymentSchedule', paymentScheduleSchema);

export default PaymentSchedule;