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
var loan_transaction_model_1 = require("../models/loan-transaction.model");
var base_1 = require("./base");
var TransactionCtrl = (function (_super) {
    __extends(TransactionCtrl, _super);
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