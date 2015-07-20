
// basic
var gulp = require("gulp");
var browserSync = require("browser-sync");
var webpack = require("webpack");
var express = require("express");
var url = require("url");
var fs = require("fs");

// gulp plugins
var gutil = require("gulp-util");
var watch = require("gulp-watch");
var sass = require("gulp-sass");
var copy = require("gulp-copy");


// convert styles
gulp.task("build.styles", function(callback) {

  // monitor css source
  var files = [
    "./src/styles/*.sass",
    "./src/styles/*.scss"
  ];
  var sassCfg = {
    errLogToConsole: true
  };
  gulp.src(files)
    .pipe(sass(sassCfg))
    .pipe(gulp.dest("./public/styles/"));

  // monitor plain css
  gulp.src("./src/styles/*.css")
    .pipe(copy("./public/styles/", { prefix: 2 }));

  gutil.log("[styles]", "styles generated");
  callback();
});

// bundle scripts
gulp.task("build.webpack", function(callback) {
  var webpackCfg = require("./webpack.config");

  // run webpack
  webpack(webpackCfg, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    callback();
  });
});


// generate environment to js
gulp.task("dev.env", function(callback) {
  var fs = require("fs");
  var proxy_port = process.env["PROXY_PORT"] || 8000;
  var js = "var env = " + JSON.stringify({
    "api_base_url": "http://localhost:"+proxy_port+"/api/"
  }) + ";";
  fs.writeFile("./public/scripts/env.js", js, function(err) {
    if (err) {
      callback(err);
      process.exit(1);
      return
    }
    gutil.log("[dev.env]", "env.js created");
  });
});

// watch the source files
// generates public files
gulp.task("dev.watch", function(callback) {
  watch([
    "./src/styles/**/*.sass",
    "./src/styles/**/*.scss",
    "./src/styles/**/*.css"
  ], function () {
    gulp.run("build.styles");
  });
  watch("./src/app/**/*.*", function () {
    gulp.run("build.webpack");
  });
});


// watch the public files
// hot reload if there is changes
gulp.task("dev.server", function(callback) {

  var files = [
    "public/**/*.html",
    "public/styles/**/*.css",
    "public/scripts/**/*.js"
  ];
  var baseDir = "./public";

  browserSync.init(files, {
    server: {
      baseDir: baseDir
    },
    middleware: function(req, res, next) {
        var fileName = url.parse(req.url);
        fileName = fileName.href.split(fileName.search).join("");
        var fileExists = fs.existsSync(baseDir + "/" + fileName);
        if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
            req.url = "/index.html";
        }
        return next();
    },
    port: process.env["PORT"] || 8080
  });

});

// api proxy for development
gulp.task("dev.api", function(callback) {

  if (typeof process.env["API_BASE_URL"] == "undefined") {
    callback("Environment variable API_BASE_URL is not defined");
    process.exit(1);
  }

  var bodyParser = require("body-parser");
  var app = express();
  var forward = require("./includes/forward.js");

  app.set("port", (process.env["PROXY_PORT"] || 8000));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(forward(/^\/api\/(.+?)$/, process.env["API_BASE_URL"], gutil.log.bind("[dev.api]")));
  app.listen(app.get("port"), function() {
    gutil.log("[dev.api]", "proxy server started at http://localhost:" + app.get("port") + "/");
    gutil.log("[dev.api]", "proxy to " + process.env["API_BASE_URL"]);
  });

});

// build the source files
gulp.task("build", ["build.styles", "build.webpack"]);

// run development server
gulp.task("dev", [
  "build",
  "dev.env",
  "dev.api",
  "dev.watch",
  "dev.server"
]);

// define default task(s)
gulp.task("default", ["dev"]);
