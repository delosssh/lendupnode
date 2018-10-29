"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var clientPaymentSchema = new mongoose.Schema({
    clientNumber: String,
    dueAmount: Number,
    dueDate: Date,
    balanceAmount: Number,
    lastPaymentAmount: Number,
    lastPaymentDate: Date
});
var ClientPayment = mongoose.model('Payment', clientPaymentSchema);
exports.default = ClientPayment;
//# sourceMappingURL=payment.js.map