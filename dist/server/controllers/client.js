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
var client_1 = require("../models/client");
var base_1 = require("./base");
var random = require('randomatic');
var ClientCtrl = (function (_super) {
    __extends(ClientCtrl, _super);
    function ClientCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = client_1.default;
        // Insert
        _this.insert = function (req, res) {
            var obj = new _this.model(req.body);
            obj.clientNumber = random('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);
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
    return ClientCtrl;
}(base_1.default));
exports.default = ClientCtrl;
//# sourceMappingURL=client.js.map