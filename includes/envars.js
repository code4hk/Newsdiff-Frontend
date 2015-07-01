

// add trailing slash
function trailSlash(str) {
  if (str.substr(-1) != '/') {
    str += '/';
  }
  return str
}

// wait for environment to be ready
exports.ready = function (callback) {
  if (typeof process.env["API_BASE_URL"] == "undefined") {
  	// if API_BASE_URL is not defined, prompt user to define
    (function (process, callback) {
      var prompt = require('prompt');
      prompt.start();	
    	console.log('Missing environment variable');
      prompt.get(['API_BASE_URL'], function (err, result) {
        if (err) { return onErr(err); }
        var url = trailSlash(result.API_BASE_URL);
        console.log('API_BASE_URL:   ' + url);
        process.env["API_BASE_URL"] = url;
        callback();
      });
    })(process, callback)
  } else {
    process.env["API_BASE_URL"] =
      trailSlash(process.env["API_BASE_URL"]);
    console.log('API_BASE_URL:   ' + process.env["API_BASE_URL"]);
    callback();
  }
}
