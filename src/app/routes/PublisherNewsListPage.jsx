
'use strict'

import React, { Component } from 'react';
import RouteActions from '../actions/RouteActions';
import NewsList from '../components/NewsList';

class PublisherNewsListPage extends Component {
  componentDidMount() {
    var code = this.props.params.code;
    RouteActions.pagePublisherNews(code);
  }
  render() {
    return (
      <div>
        <NewsList />
      </div>
    );
  }
}

export default PublisherNewsListPage
