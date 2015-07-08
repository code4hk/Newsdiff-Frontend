
'use strict'

import React from 'react';
import NewsReview from '../components/NewsReview';
import Menu from '../components/Menu';

// NewsListPage
export default React.createClass({
  render: function() {
    return (
      <div className="page-front">
        <Menu />
        <h1>News Details</h1>
      </div>
    );
  }
});
