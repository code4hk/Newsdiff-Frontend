
'use strict'

var React = require('react');

// NewsListItem
module.exports = React.createClass({
  render: function() {
    return (
      <nav className="menu">
        <ul>
          <li><a href="#/about">About</a></li>
          <li><a href="#/news">News</a></li>
        </ul>
      </nav>
    );
  }
});
