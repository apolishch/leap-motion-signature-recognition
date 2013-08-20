var express = require('express');
var app = express();

require('./config/config.js')(app, express);
require('./config/routes.js')(app);

app.listen(7777);
