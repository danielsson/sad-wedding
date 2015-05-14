var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views')

app.use(express.static('public'))


app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});