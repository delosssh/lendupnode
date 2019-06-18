"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var loan_application_model_1 = require("../models/loan-application.model");
var base_1 = require("./base");
var random = require('randomatic');
var NodeMailer = require("nodemailer");
var LoanApplicationCtrl = /** @class */ (function (_super) {
    tslib_1.__extends(LoanApplicationCtrl, _super);
    function LoanApplicationCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = loan_application_model_1.default;
        _this.insert = function (req, res) {
            var transporter = NodeMailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'delosssh@gmail.com',
                    pass: 'Sher@1512Jul'
                }
            });
            var obj = new _this.model(req.body);
            // application id
            obj.applicationId = random('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);
            obj.save(function (err, item) {
                // 11000 is the code for duplicate key error
                if (err && err.code === 11000) {
                    res.sendStatus(400);
                }
                if (err) {
                    return console.error(err);
                }
                // htmlMessage: String;
                var htmlMessage = "<p>Hello " + obj.firstName + "</p>"
                    + "<p>This is to confirm that your application was received "
                    + "and will be reviewed by our team.  It will take us 24 "
                    + "to 48 hours to review and will contact you shortly. "
                    + "In the meantime, please click the link below to validate "
                    + "your email address.</p>"
                    + "<p/>"
                    + "<a href=''>Confirm email</a>";
                var mailOptions = {
                    from: 'SS delos Santos ✔ <delosssh@gmail.com>',
                    // to: 'ancalifi@gmail.com',
                    to: obj.emailAddress,
                    subject: "Loan Application No: " + obj.applicationId,
                    // text: 'Hello ' + "req.body.email" + '✔',
                    html: htmlMessage,
                    bcc: "ancalifi@gmail.com"
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log('Message sent: ' + info.response);
                        res.send(200);
                    }
                });
                res.status(200).json(item);
            });
        };
        return _this;
    }
    return LoanApplicationCtrl;
}(base_1.default));
exports.default = LoanApplicationCtrl;
;
//# sourceMappingURL=loan-application.controller.js.map