"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cat_1 = require("./controllers/cat");
var user_1 = require("./controllers/user");
var clientpayment_1 = require("./controllers/clientpayment");
var client_1 = require("./controllers/client");
var loan_1 = require("./controllers/loan");
function setRoutes(app) {
    var router = express.Router();
    var catCtrl = new cat_1.default();
    var userCtrl = new user_1.default();
    var paymentCtrl = new clientpayment_1.default();
    var clientCtrl = new client_1.default();
    var loanCtrl = new loan_1.default();
    // Cats
    router.route('/cats').get(catCtrl.getAll);
    router.route('/cats/count').get(catCtrl.count);
    router.route('/cat').post(catCtrl.insert);
    router.route('/cat/:id').get(catCtrl.get);
    router.route('/cat/:id').put(catCtrl.update);
    router.route('/cat/:id').delete(catCtrl.delete);
    // Users
    router.route('/login').post(userCtrl.login);
    router.route('/users').get(userCtrl.getAll);
    router.route('/users/count').get(userCtrl.count);
    router.route('/user').post(userCtrl.insert);
    router.route('/user/:id').get(userCtrl.get);
    router.route('/user/:id').put(userCtrl.update);
    router.route('/user/:id').delete(userCtrl.delete);
    // Clients
    router.route('/client').post(clientCtrl.insert);
    router.route('/client/:id').get(clientCtrl.get);
    router.route('/client/:id').put(clientCtrl.update);
    router.route('/client/:id').delete(clientCtrl.delete);
    router.route('/clients').get(clientCtrl.getAll);
    router.route('/client/client/:id').get(clientCtrl.getClient);
    // Client Payments
    router.route('/clientpayment').post(paymentCtrl.insert);
    router.route('/clientpayment/:id').get(paymentCtrl.get);
    router.route('/clientpayment/:id').put(paymentCtrl.update);
    router.route('/clientpayment/:id').delete(paymentCtrl.delete);
    router.route('/clientpayments/client/:id').get(paymentCtrl.getClient);
    router.route('/clientpayments/loan/:id').get(paymentCtrl.getLoanPayments);
    // Loan
    router.route('/loan').post(loanCtrl.insert);
    router.route('/loan/:id').get(loanCtrl.get);
    router.route('/loan/:id').put(loanCtrl.update);
    router.route('/loan/:id').delete(loanCtrl.delete);
    router.route('/loans/client/:id').get(loanCtrl.getClientLoans);
    router.route('/loans/client/count/:id').get(loanCtrl.countClientLoans);
    router.route('/loan/calculate').post(loanCtrl.calculateRepayment);
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map