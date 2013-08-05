module.exports = function(app, express){

    app.get('/', function(reg, res){
        res.render('index.html')
    })

    app.use(function(err, req, res, next){
        console.error(err.stack);
        res.send(500, 'Something broke!');
    });
}