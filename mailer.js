"use strict";
const nodemailer = require("nodemailer");

const smtpParams = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "bharathybot@gmail.com", // generated ethereal user
    pass: "Qwerty#145", // generated ethereal password
  },
}

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport(smtpParams);


// async..await is not allowed in global scope, must use a wrapper
async function sendMail(mailParams) {

  // send mail with defined transport object
  let info = await transporter.sendMail(mailParams);
  // console.log(info)
}



module.exports.sendMail = sendMail