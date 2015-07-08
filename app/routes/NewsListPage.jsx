
'use strict'

import React from 'react';
import NewsList from '../components/NewsList';
import Menu from '../components/Menu';
import RouteActions from '../actions/RouteActions';

// NewsListPage
export default React.createClass({
  render: function() {
    RouteActions.pageNews();
    return (
      <div className="page-front">
        <Menu />
        <h1>News</h1>
        <NewsList />
      </div>
    );
  }
});
