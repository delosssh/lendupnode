"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var clientpayment_1 = require("../models/clientpayment");
var base_1 = require("./base");
var PaymentCtrl = /** @class */ (function (_super) {
    tslib_1.__extends(PaymentCtrl, _super);
    function PaymentCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = clientpayment_1.default;
        _this.getClient = function (req, res) {
            _this.model.find({ clientNumber: req.params.id }, function (err, obj) {
                if (err) {
                    return console.error(err);
                }
                res.json(obj);
            });
        };
        _this.getLoanPayments = function (req, res) {
            _this.model.find({ loanId: req.params.id }, function (err, obj) {
                if (err) {
                    return console.error(err);
                }
                res.json(obj);
            });
        };
        _this.getLoanPayments2 = function (req, res) {
            _this.model.find({ loanId: req.params.id }, function (err, obj) {
                if (err) {
                    return console.error(err);
                }
                res.json(obj);
            })
                .sort({ paymentDate: 'desc' })
                .exec(function (error, docs) {
                console.dir(docs);
            });
        };
        return _this;
    }
    return PaymentCtrl;
}(base_1.default));
exports.default = PaymentCtrl;
//# sourceMappingURL=clientpayment.js.map