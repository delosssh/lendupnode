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
    lastPaymentAmount: Number,
    lastPaymentDate: Date
});
var ClientPayment = mongoose.model('ClientPayment', clientPaymentSchema);
exports.default = ClientPayment;
//# sourceMappingURL=clientpayment.js.map