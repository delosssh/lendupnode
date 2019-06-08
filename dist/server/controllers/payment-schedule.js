"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var payment_schedule_model_1 = require("../models/payment-schedule.model");
var base_1 = require("./base");
var PaymentScheduleCtrl = /** @class */ (function (_super) {
    tslib_1.__extends(PaymentScheduleCtrl, _super);
    function PaymentScheduleCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = payment_schedule_model_1.default;
        _this.insert = function (req, res) {
            var obj = new _this.model(req.body);
            var schedule;
            console.log('payment-schedule.ts : insert');
            console.dir(req.body);
            req.body.forEach(function (item) {
                console.log(item.loanId);
                schedule = new _this.model(item);
                console.log(schedule.loanId);
                console.log(schedule.interestAmount);
                schedule.save(function (err, item) {
                    if (err && err.code === 11000) {
                        res.sendStatus(400);
                    }
                    if (err) {
                        return console.error(err);
                    }
                });
            });
            res.status(200).json({ err: false, status: 200 });
            // obj.save((err, item) => {
            //   // 1100 is the code for duplicate key
            //   if (err && err.code === 11000) {
            //     res.sendStatus(400);
            //   }
            //   if (err) {
            //     return console.error(err);
            //   }
            //   res.status(200).json(item);
            // });
        };
        _this.getByLoanId = function (req, res) {
            _this.model.find({ loanId: req.params.loanId }, function (err, obj) {
                if (err) {
                    return console.error(err);
                }
                res.json(obj);
            });
        };
        return _this;
    }
    return PaymentScheduleCtrl;
}(base_1.default));
exports.default = PaymentScheduleCtrl;
//# sourceMappingURL=payment-schedule.js.map