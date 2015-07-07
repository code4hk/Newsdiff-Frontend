
'use strict'

import React from 'react';
import {Link} from 'react-router';

// NewsListItem
export default React.createClass({
  render: function() {
    return (
      <nav className="menu">
        <ul>
          <li><Link to="page-about">About</Link></li>
          <li><Link to="page-news">News</Link></li>
        </ul>
      </nav>
    );
  }
});
