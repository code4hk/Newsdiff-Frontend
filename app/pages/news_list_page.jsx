
'use strict'

import React from 'react';
import NewsList from '../components/news_list';
import Menu from '../components/menu';

// NewsListPage
export default React.createClass({
  render: function() {
    return (
      <div className="page-front">
        <Menu />
        <h1>News</h1>
        <NewsList />
      </div>
    );
  }
});
