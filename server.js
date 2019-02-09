const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const port = '3000';
const contactInfo = require('./db/db.js')
const insertInfo = require('./db/db.js')


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

////////MYSQL POST FUNCTION//////////
app.post('/contact', (req, res) => {
    
    // insertInfo.insertInfo()
    //     .then(results => res.send(results))
    //     .catch(e => console.log(e));
    //     console.log(`${name}`)

    ////////POST RESPONSE//////////
    res.send('Thanks for the email ' + req.body.name + '. I will get back to you in a timely manner.');
    //////////STORE NAME IN JSON FILE//////////
    fs.appendFileSync('userData.json', JSON.stringify(req.body.name), err => {

        if (err)
            console.log("You've made an error")
    })


    


    // //////////STORE EMAIL IN JSON FILE//////////
    // fs.appendFileSync('userData.json', JSON.stringify(req.body.email), err => {

    //     if (err)
    //         console.log("You've made an error")
    // })

    // fs.appendFileSync('userData.json', JSON.stringify(req.body.message), err => {

    //     if (err)
    //         console.log("You've made an error")
    // })
});



//////////SPECIFY PORT TO LISTEN TO/////////
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});





