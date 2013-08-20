var express = require('express');
var app = express();
//var webSocket = require('ws'),
//    wsLeap = new webSocket('ws://127.0.0.1:6437');
//    wsBrowser = new webSocket('ws://127.0.0.1:8809');


//wsLeap.on('message', function(data, flags) {
////    wsBrowser.send(data,flags);
//});

require('./config/config.js')(app, express);
require('./config/routes.js')(app);

app.listen(7777);
