/**
 * Created by Sahin on 02/10/16.
 */

var express = require('express');
var app = express();
var PORT = process.env.PORT | 3000;


app.get('/', function (req, resp) {
    resp.send('This is the Sahin\'s firs web server');
});

app.get('/about', function (req, resp) {
    resp.send('We are the crazy computer engineers!');
});

app.get('/bio', function (req, resp) {
    resp.send('I am from Elazığ which located in the east part of Turkey and i born in 1989 and graduated' +
        ' from Marmara University in 2011');
});


app.listen(PORT, function () {
    console.log('Web server started on the port :' + PORT);
})