module.exports = function(app, express){
    app.set('views', __dirname + '/../views');
    app.engine('html', require('ejs').renderFile);
    app.use(express.static(__dirname + '/../public'));
}