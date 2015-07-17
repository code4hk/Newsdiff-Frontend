var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var envars = require('./includes/envars.js')
var forward = require('./includes/forward.js')

envars.ready(function () {

  app.set('port', (process.env.PORT || 3000));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(forward(/^\/api\/(.+?)$/, process.env["API_BASE_URL"]));

  app.get('/scripts/env.js', function(req, res) {
    /*
    var js = 'var env = ' + JSON.stringify({
      "api_base_url": process.env["API_BASE_URL"]
    }) + ';';
    */
    var js = 'var env = ' + JSON.stringify({
      "api_base_url": '/api/'
    }) + ';';
    res.setHeader('Cache-Control', 'no-cache');
    res.send(js);
  });

  // serve other static files
  app.use('/', express.static(path.join(__dirname, 'public')));

  app.get('*', function(req, res){
    res.sendfile(path.join(__dirname, 'public', 'index.html'));
  });

  app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
  });

})
