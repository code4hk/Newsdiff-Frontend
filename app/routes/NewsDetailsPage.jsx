
'use strict'

import React from 'react';
import NewsDetails from '../components/NewsDetails';
import Menu from '../components/Menu';
import RouteActions from '../actions/RouteActions';

// NewsListPage
export default React.createClass({
  render: function() {
    RouteActions.pageNewsDetails(this.props.params.id);
    return (
      <div className="page-front">
        <Menu />
        <NewsDetails />
      </div>
    );
  }
});
