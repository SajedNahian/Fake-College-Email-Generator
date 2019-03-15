const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const api_key = "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";
const app = express();
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
	      api_key:api_key
    }
  })
);
// softdevvy
// softdevvy1
const emailHelper = require('./util/email');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // allows us to reference the public folder in the ejs

app.get('/', (req, res, next) => {
  res.render('index.ejs', {
    subtitle: 'We are not responsible for anything you do with this app.'
  });
})

app.post('/prank', (req, res, next) => {
  const { email, name, university, emailType } = req.body;
  let emailBody = '';
  let emailSubject = '';
  if (emailType == 'accept') {
    emailBody = emailHelper.acceptLetter(name, university);
    emailSubject = `${university} Admissions Decision`;
  } else if (emailType == 'reject') {
    emailBody = emailHelper.rejectLeter(name, university);
    emailSubject = `${university} Admissions Decision`;
  } else if (emailType == 'rescind') {
    emailBody = emailHelper.rescindLetter(name, university);
    emailSubject = `${university} Admissions Update`;
  }

  transporter.sendMail({
    to: email,
    from: `${university.replace(/\s/g, '')}@college-admissions.com`,
    subject: emailSubject,
    html: emailBody
  }).then().catch(err => { console.log(err); });

  // if (university.toLowerCase() == 'harvard') {
  //   transporter.sendMail({
  //     to: email,
  //     from: `${university}@college-admissions.com`,
  //     subject: 'Admissions Decision',
  //     html: `
  //       <img src="https://i.imgur.com/eTq9Goi.jpg">
  //     `
  //   });
  // }
  res.redirect('/');
})

app.use((req, res, next) => {
  res.status(500).render('404', {
    pageTitle: 'Error!',
  });
});

app.listen(3000);