import LoanApplication from '../models/loan-application.model';
import BaseCtrl from './base';

import * as NodeMailer from 'nodemailer';

export default class LoanApplicationCtrl extends BaseCtrl {

  model = LoanApplication;

  insert = (req, res) => {

    let transporter = NodeMailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'delosssh@gmail.com',
        pass: 'Sher@1512Jul'
      }
    });

    const obj = new this.model(req.body);
    obj.save((err, item) => {
      // 11000 is the code for duplicate key error
      if (err && err.code === 11000) {
        res.sendStatus(400);
      }
      if (err) {
        return console.error(err);
      }

      var mailOptions = {
        from: 'SS delos Santos ✔ <delosssh@gmail.com>',
        // to: 'ancalifi@gmail.com',
        to: obj.emailAddress,
        subject: "Hello " + "sherwin",
        text: 'Hello ' + "req.body.email" + '✔',
        html: "<p>Hello " + "req.body.email" + " </p>",
        bcc: "ancalifi@gmail.com"
      };

      transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
            res.send(200);
        }
      });

      res.status(200).json(item);
    });
  }

};