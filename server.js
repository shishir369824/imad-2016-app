var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.html'));
});
app.get('/2.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2.html'));
});
app.get('/3.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '3.html'));
});
app.get('/4.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '4.html'));
});
app.get('/5.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '5.html'));
});
app.get('/6.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '6.html'));
});
app.get('/123.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '123.html'));
});






var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
