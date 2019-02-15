const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const mysql = require('mysql');
const port = '3000';


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//////////CONNECTION//////////
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'BeGre@t2019',
    database: 'portfolio_contact'
});


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
    
    let cActive = document.getElementById('contact')
    
    cActive.classList.add('active')
});

//////////CUSTOM 404 PAGE//////////
app.get('*', function (req, res) {
    res.render(pathJoin + '/error');
});

//////////TELLING SERVER TO USE BODY PARSER PACKAGE//////////
app.use(bodyParser.urlencoded({ extended: true }));

//////////POST RESPONSE FOR CONTACT PAGE//////////
app.post('/contact', (req, res) => {

    ////////POST RESPONSE//////////
    res.send('Thanks for the email ' + req.body.name + '. I will get back to you in a timely manner.');

    //////////SEND TO DATABASE//////////
    let query = `INSERT INTO contact_info(name, email, message) VALUES(?, ?, ?)`;

    let data = [`${req.body.name}`, `${req.body.email}`, `${req.body.message}`]

    pool.query(query, data, (err, results, fields) => {
        if (!err)
            res.send(results);
        else
            console.log(err);
    });
});



//////////SPECIFY PORT TO LISTEN TO/////////
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});





