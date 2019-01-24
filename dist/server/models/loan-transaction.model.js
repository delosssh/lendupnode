"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var transactionSchema = new mongoose.Schema({
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
var Transaction = mongoose.model('loan-transaction', transactionSchema);
exports.default = Transaction;
//# sourceMappingURL=loan-transaction.model.js.map