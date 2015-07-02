
'use strict'

var React = require('react');
var Menu = require('../components/menu');

// AboutPage
module.exports = React.createClass({
  render: function () {
    return (
      <div className="page-about">
        <Menu />
        <h1>About Us</h1>
        <p>Hello world</p>
      </div>
    );
  }
});
