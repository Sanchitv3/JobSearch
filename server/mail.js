var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sanchitverma030303@gmail.com',
    pass: 'jlhf tscg ovqa dmye'
  }
});


var mailOptions = {
  from: 'sanchitverma030303@gmail.com',
  to: 'sanchit1258.be21@chitkara.edu.in',
  subject: 'Hi',
  text: 'hello'
};

for(var i = 0; i<100;i++){
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});}
