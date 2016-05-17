var http_IP = process.env.IP || "0.0.0.0";
var http_port = process.env.PORT || 3000;

var http = require('http');  
var express = require("express");
var app = express();

app.use(express.static((__dirname + '/view/static')));

require("./router").rout(app);

var server = http.createServer(app);
server.listen(http_port,http_IP);
console.log('listening to http://' + http_IP + ':' + http_port);  
