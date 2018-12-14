var fs = require('fs');
var http = require('http');
var express = require('express');
var exp = express();

exp.set('view engine', 'ejs');

exp.use('/public', express.static('public'));


exp.get('/', function(req, res){
    res.send('/index.html');
});

exp.get('/news', function(req, res){
    res.send('show news');
});

// exp.get('/news/:news_id', function(req, res){
//     res.send('show news for id: ' + req.params.news_id);
// });



exp.get('/news/:news_id', function(req, res){
    res.render('template', {client_id: req.params.news_id });
});

exp.get('/temp/:index', function(req, res){
    res.render('index', {index: req.params.index });
});

exp.post('/', function(req, res){
    res.send('Test test 123 123');
});

exp.listen(3000);

//var server = http.createServer(function(req, res){
    
    //res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' })
    //var mread = fs.createReadStream(__dirname + '/index.html', 'utf8');
    //mread.pipe(res);
//});

// server.listen(3000, '127.0.0.1');
// console.log('listen 3000');

