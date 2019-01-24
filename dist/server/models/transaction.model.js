"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var transactionSchema = new mongoose.Schema({
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
    debitAmount: Number,
    creditAmount: Number,
    createDate: Date,
    lastUpdate: Date,
});
var Transaction = mongoose.model('Transaction', transactionSchema);
exports.default = Transaction;
//# sourceMappingURL=transaction.model.js.map