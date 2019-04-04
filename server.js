const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = '3000';


require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//////////SETTING VIEW ENGINE TO EJS//////////
app.set('view engine', 'ejs');

//////////TELLING SERVER WHERE TO LOOK FOR FILES//////////
const pathJoin = path.join(__dirname + '/views');

app.use(express.static(path.join(__dirname + '/views')));

//////////ALL OF MY ROUTING//////////
app.get('/index', function (req, res) {
    res.render(pathJoin + '/index');
});

app.get('/home', function (req, res) {
    res.render(pathJoin + '/home');
});

app.get('/about', function (req, res) {
    res.render(pathJoin + '/about');
});

app.get('/projects', function (req, res) {
    res.render(pathJoin + '/projects');
});

app.get('/contact', function (req, res) {
    res.render(pathJoin + '/contact');
});

//////////CUSTOM 404 PAGE//////////
app.get('*', function (req, res) {
    res.render(pathJoin + '/error');
});

//////////TELLING SERVER TO USE BODY PARSER PACKAGE//////////
app.use(bodyParser.urlencoded({ extended: true }));

//////////POST RESPONSE FOR CONTACT PAGE//////////
app.post('/contact', function (req, res, next) {
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    })
    next()
    mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;',
      to: process.env.GMAIL_USER,
      subject: 'New message from contact form at blakemccracken.com',
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };
    
    smtpTrans.sendMail(mailOpts, function (error, res) {
      if(error) {
        console.log("Something went wrong seding contact form data")
      } 
    });
    res.render(pathJoin + '/home');
  });



//////////SPECIFY PORT TO LISTEN TO/////////
app.listen(process.env.PORT || port, function () {
    console.log('Server listening on port ' + port);
});





