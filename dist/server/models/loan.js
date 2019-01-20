"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
// import ClientPayment from './clientpayment';
var loanSchema = new mongoose.Schema({
    loanId: String,
    clientNumber: String,
    principalAmount: Number,
    interestRate: Number,
    loanTypeId: String,
    paymentTypeId: String,
    applicationDate: Date,
    loanApproveDate: Date,
    releaseDate: Date,
    dueDate: Date,
    numberOfPayments: Number,
    paymentAmount: Number,
    paymentInterval: Number,
    balanceAmount: Number,
    loanProceed: String,
    needByDate: Date,
    paymentSchedule: [],
    lastUpdate: Date,
    creationDate: Date
});
loanSchema.methods.updateBalanceAmount = function (newBalanceAmount) {
    this.balanceAmount = newBalanceAmount;
};
var Loan = mongoose.model('Loan', loanSchema);
exports.default = Loan;
//# sourceMappingURL=loan.js.map