
'use strict'

import React, { Component } from 'react';
import RouteActions from '../actions/RouteActions';
import NewsList from '../components/NewsList';

class NewsListPage extends Component {
  componentDidMount() {
    RouteActions.pageNews();
  }

  render() {
    return (
      <div>
        <NewsList />
      </div>
    );
  }
}

export default NewsListPage;
