import Transaction from '../models/loan-transaction.model';
import BaseCtrl from './base';

export default class TransactionCtrl extends BaseCtrl {
  model = Transaction;

  getByLoanId = (req, res) => {
    this.model.find({ loanId: req.params.id }, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj);
    })
    .sort({ transactionDate: 'asc' })
    .exec(function(err, docs) {
      console.dir(docs);
    });
  }  

}