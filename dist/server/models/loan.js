"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
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
    lastUpdate: Date,
    creationDate: Date
});
var Loan = mongoose.model('Loan', loanSchema);
exports.default = Loan;
//# sourceMappingURL=loan.js.map