
var request = require('request')

// add trailing slash
function trailSlash(str) {
  if (str.substr(-1) != '/') {
    str += '/';
  }
  return str
}

module.exports = function(pattern, host, log){
  host = trailSlash(host);
  return function(req, res, next){
    if(req.url.match(pattern)){
      log("Accessing proxy api on "+req.url);
      var db_path = req.url.match(pattern)[1]
        , db_url = [host, db_path].join('');
      res.header('Access-Control-Allow-Origin', '*');
      req.pipe(request[req.method.toLowerCase()](db_url)).pipe(res);
    }else{
      next();
    }
  }
}
