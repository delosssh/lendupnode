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
var clientpayment_1 = require("../models/clientpayment");
var base_1 = require("./base");
var PaymentCtrl = (function (_super) {
    __extends(PaymentCtrl, _super);
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
        return _this;
    }
    return PaymentCtrl;
}(base_1.default));
exports.default = PaymentCtrl;
//# sourceMappingURL=payment.js.map