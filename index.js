var express = require('express');
var compression = require('compression')
var app = express();

app.set('view engine', 'jade');
app.set('views', './views')


app.use(compression());

app.use(express.static('public', {
    index: false,
    maxAge: 31556900000
}))



if (process.env.NODE_ENV == "production") {
    app.use('/', function (req, res, next) {
        res.setHeader("Cache-Control", "public, max-age=472800")
        next()
    })
}


app.get('/', function (req, res) {
    res.render('index');
});

var server = app.listen(process.env.PORT || 3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});