var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require("body-parser")


app.set('view engine', 'ejs');
app.use(express.static('./views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require('./routes/core.routes.js')(app);

server.listen(process.env.PORT, process.env.IP, function(){
  console.log('Server running');
});


module.exports = app;