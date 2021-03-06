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
var PaymentScheduleModel = mongoose.model('PaymentSchedule', paymentScheduleSchema);
exports.default = PaymentScheduleModel;
//# sourceMappingURL=payment-schedule.model.js.map