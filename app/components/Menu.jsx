
'use strict'

import React from 'react';

// NewsListItem
export default React.createClass({
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
