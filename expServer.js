var http = require('http');
var request = require('request');
var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, '/public')));
//app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/api/weather', function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var json = {};
//    http.get('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=cdc3eb1482ebce5f8b4a27eec419707a' + 
//            '&q=' + req.query.city + '&cnt=' + req.query.days)
//    .then(function(response){
//        return response.data;//this flattens the response by removing .data
//    })
//    .then(function(response){
//      console.log(response);//same as response.data from above
//    });
    
    var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=cdc3eb1482ebce5f8b4a27eec419707a' + 
            '&q=' + req.query.city + '&cnt=' + req.query.days;
    request(url, function(err, resp, body) {
        json = JSON.parse(body);
        console.log(json);
     });
});
app.listen(3000);

//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});
//
//
//var port = normalizePort(process.env.PORT || '3000');
//app.set('port', port);
//app.listen();
//
///**
// * Normalize a port into a number, string, or false.
// */
//
//function normalizePort(val) {
//  var port = parseInt(val, 10);
//
//  if (isNaN(port)) {
//    // named pipe
//    return val;
//  }
//
//  if (port >= 0) {
//    // port number
//    return port;
//  }
//
//  return false;
//}
//
