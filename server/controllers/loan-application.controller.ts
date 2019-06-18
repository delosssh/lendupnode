import LoanApplication from '../models/loan-application.model';
import BaseCtrl from './base';
var random = require('randomatic');

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

    // application id
    obj.applicationId = random('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);
    obj.save((err, item) => {
      // 11000 is the code for duplicate key error
      if (err && err.code === 11000) {
        res.sendStatus(400);
      }
      if (err) {
        return console.error(err);
      }

      // htmlMessage: String;
      let htmlMessage = "<p>Hello " + obj.firstName + "</p>" + '✔'
                      + "<p>This is to confirm that your application was received "
                      + "and will be reviewed by our team.  It will take us 24 "
                      + "to 48 hours to review and will contact you shortly. "
                      + "In the meantime, please click the link below to validate "
                      + "your email address.</p>" + '✔'
                      + "<p/>" + '✔'
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