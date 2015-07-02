
'use strict'

// Router
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

// pages
var NewsListPage = require('./pages/news_list')
var AboutPage = require('./pages/about')

// App
var React = require('react');
var RouteHandler  = require('react-router').RouteHandler;
var App = React.createClass({
  render () {
    return (
      <RouteHandler/>
    );
  }
});

// declare our routes and their hierarchy
module.exports = (
  <Route handler={App}>
    <DefaultRoute handler={NewsListPage}/>
    <Route path="news" handler={NewsListPage}/>
    <Route path="about" handler={AboutPage}/>
  </Route>
);
