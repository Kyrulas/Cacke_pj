var http_IP = process.env.IP || "127.0.0.1";
var http_port = process.env.PORT || 3000;

var http = require('http');  
var express = require("express");
var exphbs = require('express-handlebars');
var app = express();
var hbs = exphbs.create();

hbs.handlebars.registerHelper("equal", require("handlebars-helper-equal"));

/*hbs.registerHelper("equal", require("handlebars-helper-equal"));*/
var bodyParser = require("body-parser");


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static((__dirname + '/views/static')));
require("./router").rout(app);

var server = http.createServer(app);
server.listen(http_port,http_IP);
console.log('listening to http://' + http_IP + ':' + http_port);  
