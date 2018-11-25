import PaymentSchedule from '../models/payment-schedule';
import BaseCtrl from './base';

export default class PaymentScheduleCtrl extends BaseCtrl {
  model = PaymentSchedule;

  insert = (req, res) => {
    const obj = new this.model(req.body);
    var schedule;
    console.log('payment-schedule.ts : insert');
    console.dir(req.body);

    req.body.forEach(
      (item) => {
        console.log(item.loanId);
        schedule = new this.model(item);
        console.log(schedule.loanId);


        schedule.save((err, item) => {
          if (err && err.code === 11000) {
            res.sendStatus(400);
          }
          if (err) {
            return console.error(err);
          }
        });
      }
    );

    res.status(200).json({err: false, status: 200});

    // obj.save((err, item) => {
    //   // 1100 is the code for duplicate key
    //   if (err && err.code === 11000) {
    //     res.sendStatus(400);
    //   }
    //   if (err) {
    //     return console.error(err);
    //   }
    //   res.status(200).json(item);
    // });
  }

}