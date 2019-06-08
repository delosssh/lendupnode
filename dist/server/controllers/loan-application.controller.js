"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var loan_application_model_1 = require("../models/loan-application.model");
var base_1 = require("./base");
var LoanApplicationCtrl = /** @class */ (function (_super) {
    tslib_1.__extends(LoanApplicationCtrl, _super);
    function LoanApplicationCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = loan_application_model_1.default;
        return _this;
    }
    return LoanApplicationCtrl;
}(base_1.default));
exports.default = LoanApplicationCtrl;
;
//# sourceMappingURL=loan-application.controller.js.map