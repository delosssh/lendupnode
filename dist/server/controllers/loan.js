"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var loan_1 = require("../models/loan");
var base_1 = require("./base");
var daily_payment_schedule_1 = require("../models/daily-payment-schedule");
var random = require('randomatic');
var LoanCtrl = (function (_super) {
    __extends(LoanCtrl, _super);
    function LoanCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = loan_1.default;
        // Insert
        _this.insert = function (req, res) {
            var obj = new _this.model(req.body);
            obj.loanId = random('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);
            obj.save(function (err, item) {
                // 11000 is the code for duplicate key error
                if (err && err.code === 11000) {
                    res.sendStatus(400);
                }
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            });
        };
        _this.getClientLoans = function (req, res) {
            _this.model.find({ clientNumber: req.params.id }, function (err, obj) {
                if (err) {
                    return console.error(err);
                }
                res.json(obj);
            });
        };
        _this.countClientLoans = function (req, res) {
            _this.model.count({ clientNumber: req.params.id }, function (err, count) {
                if (err) {
                    return console.error(err);
                }
                res.json(count);
            });
        };
        _this.calculateRepayment = function (req, res) {
            /**
             * - principal
             * - payment type (daily, weekly, monthly)
             * - savings = 10% of principal
             * - mutual aid = 4% of principal
             */
            var obj = new _this.model(req.body);
            var totalPayableAmount;
            var interestRate;
            var savings;
            var mutualAid;
            var paymentType;
            var totalNumberOfPayments;
            var months;
            var interestAmount;
            var totalPayable;
            var dueAmount;
            var payInterval;
            var retval;
            var paymentSchedule;
            var schedules = [];
            var dueDate = new Date();
            // var dueDate1: Date = new Date();
            retval = 'none';
            if (obj.paymentTypeId == "daily") {
                console.log("daily");
                payInterval = 1;
                interestRate = 3.5;
                savings = obj.principalAmount * 0.10;
                mutualAid = obj.principalAmount * 0.04;
                totalNumberOfPayments = 80;
                months = (totalNumberOfPayments / 5) / 4;
                interestAmount = obj.principalAmount * ((interestRate * months) / 100);
                totalPayable = obj.principalAmount + savings + mutualAid + interestAmount;
                dueAmount = totalPayable / totalNumberOfPayments;
                var counter = 0;
                while (true) {
                    console.log(' dow: ' + dueDate.getDay());
                    paymentSchedule = new daily_payment_schedule_1.DailyPaymentSchedule();
                    if (dueDate.getDay() != 0 && dueDate.getDay() != 6) {
                        paymentSchedule.paymentNumber = counter + 1;
                        paymentSchedule.dueAmount = dueAmount;
                        paymentSchedule.dueDate = new Date(dueDate.getTime());
                        counter++;
                    }
                    else {
                        paymentSchedule.paymentNumber = 0;
                        paymentSchedule.dueAmount = 0;
                        paymentSchedule.dueDate = new Date(dueDate.getTime());
                    }
                    schedules.push(paymentSchedule);
                    if (counter == totalNumberOfPayments) {
                        break;
                    }
                    // counter ++;
                    dueDate.setDate(dueDate.getDate() + 1);
                }
                retval = schedules;
            }
            else if (obj.paymentTypeId == "weekly") {
                console.log("weekly");
                payInterval = 7;
                interestRate = 3.5;
                savings = obj.principalAmount * 0.10;
                mutualAid = obj.principalAmount * 0.04;
                totalNumberOfPayments = 16;
                months = totalNumberOfPayments / 4;
                interestAmount = obj.principalAmount * ((interestRate * months) / 100);
                totalPayable = obj.principalAmount + savings + mutualAid + interestAmount;
                dueAmount = totalPayable / totalNumberOfPayments;
                var counter = 0;
                while (true) {
                    console.log(' dow: ' + dueDate.getDay());
                    paymentSchedule = new daily_payment_schedule_1.DailyPaymentSchedule();
                    // if (dueDate.getDay() != 0 && dueDate.getDay() != 6) {
                    paymentSchedule.paymentNumber = counter + 1;
                    paymentSchedule.dueAmount = dueAmount;
                    paymentSchedule.dueDate = new Date(dueDate.getTime());
                    counter++;
                    // } else {
                    //   paymentSchedule.paymentNumber = 0;
                    //   paymentSchedule.dueAmount = 0;
                    //   paymentSchedule.dueDate = new Date(dueDate.getTime());
                    // }
                    schedules.push(paymentSchedule);
                    if (counter == totalNumberOfPayments) {
                        break;
                    }
                    // counter ++;
                    dueDate.setDate(dueDate.getDate() + payInterval);
                }
                retval = schedules;
            }
            else if (obj.paymentTypeId == "monthly") {
                console.log("monthly");
            }
            else {
                console.log("invalid payment type");
            }
            console.dir(retval);
            // retval = JSON.parse(retval);
            // res.status(200).json(JSON.stringify(retval));
            // res.status(200).json({error: false});
            res.status(200).json(retval);
            // res.header("Content-Type",'application/json');
            // res.send(retval);
        };
        return _this;
    }
    return LoanCtrl;
}(base_1.default));
exports.default = LoanCtrl;
//# sourceMappingURL=loan.js.map