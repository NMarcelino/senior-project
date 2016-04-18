var express = require('express');
var morgan = require('morgan');

var app = express();

app.use('/lobby', express.static(__dirname + '/lobby'));

app.use(morgan('dev'));

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
