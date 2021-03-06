"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var clientPaymentSchema = new mongoose.Schema({
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
clientPaymentSchema.post('save', function (next) {
    console.log('clientpayments.ts models');
    // next();
});
var ClientPayment = mongoose.model('ClientPayment', clientPaymentSchema);
exports.default = ClientPayment;
//# sourceMappingURL=clientpayment.js.map