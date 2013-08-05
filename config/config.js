module.exports = function(app){
    app.set('views', __dirname + '../views');
    app.engine('html', require('ejs').renderFile);
}