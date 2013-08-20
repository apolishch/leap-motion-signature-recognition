var express = require('express');
var app = express();


ws.on('message', function(data, flags) {
    console.log(data);
});

require('./config/config.js')(app, express);
require('./config/routes.js')(app);

app.listen(7777);
