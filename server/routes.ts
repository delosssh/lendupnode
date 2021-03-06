import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import PaymentCtrl from './controllers/clientpayment';
import ClientCtrl from './controllers/client.controller';
import LoanCtrl from './controllers/loan';
import PaymentScheduleCtrl from './controllers/payment-schedule';
import LoanTransactionCtrl from './controllers/loan-transaction.controller';
import LoanApplicationCtrl from './controllers/loan-application.controller';
// import Cat from './models/cat';
// import User from './models/user';
// import Payment from './models/clientpayment';
// import Client from './models/client';
// import Loan from './models/loan';
// import PaymentScheduleModel from './models/payment-schedule.model';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const paymentCtrl = new PaymentCtrl();
  const clientCtrl = new ClientCtrl();
  const loanCtrl = new LoanCtrl();
  const paymentScheduleCtrl = new PaymentScheduleCtrl();
  const loanTransactionCtrl = new LoanTransactionCtrl();
  const loanApplicationCtrl = new LoanApplicationCtrl();

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
  router.route('/clients/username/:id').get(clientCtrl.getByUsername);
  router.route('/client/client/:id').get(clientCtrl.getClient);
  
  // Client Payments
  router.route('/clientpayment').post(paymentCtrl.insert);
  router.route('/clientpayment/:id').get(paymentCtrl.get);
  router.route('/clientpayment/:id').put(paymentCtrl.update);
  router.route('/clientpayment/:id').delete(paymentCtrl.delete);
  router.route('/clientpayments/client/:id').get(paymentCtrl.getClient);
  router.route('/clientpayments/loan/:id').get(paymentCtrl.getLoanPayments);
  router.route('/clientpayments/loan/lastpayment/:id').get(paymentCtrl.getLoanPayments2);
  
  // Loan
  router.route('/loan').post(loanCtrl.insert);
  router.route('/loan/:id').get(loanCtrl.get);
  router.route('/loan/:id').put(loanCtrl.update);
  router.route('/loan/:id').delete(loanCtrl.delete);
  router.route('/loans/client/:id').get(loanCtrl.getClientLoans);
  router.route('/loans/client/count/:id').get(loanCtrl.countClientLoans);
  router.route('/loan/calculate').post(loanCtrl.calculateRepayment);
  
  // Payment Schedule
  router.route('/paymentschedule').post(paymentScheduleCtrl.insert);
  router.route('/paymentschedules/loan/:loanId').get(paymentScheduleCtrl.getByLoanId);

  // Transaction
  router.route('/loantransaction').post(loanTransactionCtrl.insert);
  router.route('/loantransaction/loan/:id').get(loanTransactionCtrl.getByLoanId);

  // 2019-06-08
  // Loan application
  router.route('/loanapplication').post(loanApplicationCtrl.insert);


  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
