"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var loan_transaction_model_1 = require("../models/loan-transaction.model");
var base_1 = require("./base");
var TransactionCtrl = /** @class */ (function (_super) {
    tslib_1.__extends(TransactionCtrl, _super);
    function TransactionCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = loan_transaction_model_1.default;
        _this.getByLoanId = function (req, res) {
            _this.model.find({ loanId: req.params.id }, function (err, obj) {
                if (err) {
                    return console.error(err);
                }
                res.json(obj);
            })
                .sort({ transactionDate: 'asc' })
                .exec(function (err, docs) {
                console.dir(docs);
            });
        };
        return _this;
    }
    return TransactionCtrl;
}(base_1.default));
exports.default = TransactionCtrl;
//# sourceMappingURL=loan-transaction.controller.js.map