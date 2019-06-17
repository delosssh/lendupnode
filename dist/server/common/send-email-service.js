"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var SendGrid = require("sendgrid");
var SendGridMail = /** @class */ (function (_super) {
    tslib_1.__extends(SendGridMail, _super);
    function SendGridMail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SendGridMail;
}(SendGrid.mail.Mail));
exports.SendGridMail = SendGridMail;
var SendGridEmail = /** @class */ (function (_super) {
    tslib_1.__extends(SendGridEmail, _super);
    function SendGridEmail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SendGridEmail;
}(SendGrid.mail.Email));
exports.SendGridEmail = SendGridEmail;
var SendGridContent = /** @class */ (function (_super) {
    tslib_1.__extends(SendGridContent, _super);
    function SendGridContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SendGridContent;
}(SendGrid.mail.Content));
exports.SendGridContent = SendGridContent;
var SendEmailService = /** @class */ (function () {
    function SendEmailService(sendgridApiKey) {
        this.sendgridApiKey = sendgridApiKey;
        this.sendGrid = SendGrid(sendgridApiKey);
    }
    SendEmailService.prototype.send = function (mail) {
        var request = this.sendGrid.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
        });
        return this.sendGrid.API(request);
    };
    return SendEmailService;
}());
exports.default = SendEmailService;
//# sourceMappingURL=send-email-service.js.map