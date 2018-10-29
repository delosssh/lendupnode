"use strict";
var express = require("express");
/* routes */
var app = express();
var Routes = (function () {
    function Routes() {
    }
    Object.defineProperty(Routes.prototype, "routes", {
        get: function () {
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Routes;
}());
module.exports = Routes;
//# sourceMappingURL=Routes.js.map