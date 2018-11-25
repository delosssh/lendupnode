"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var paymentScheduleSchema = new mongoose.Schema({
    loanId: String,
    paymentNumber: Number,
    dueAmount: Number,
    dueDate: Date,
    installmentAmount: Number,
    interestAmount: Number,
    principalAmount: Number,
    balanceAmount: Number
});
var PaymentSchedule = mongoose.model('PaymentSchedule', paymentScheduleSchema);
exports.default = PaymentSchedule;
//# sourceMappingURL=payment-schedule.js.map