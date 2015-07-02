
'use strict'

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('content'));
});
