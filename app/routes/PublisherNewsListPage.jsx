
'use strict'

import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import NewsList from '../components/NewsList';
import NewsListTitle from '../components/NewsListTitle';
import Menu from '../components/Menu';
import RouteActions from '../actions/RouteActions';

class PublisherNewsListPage extends Component {

  render() {
    var code = this.props.params.code;
    RouteActions.pagePublisherNews(code);
    return (
      <div className="page-front">
        <Menu />
        <NewsListTitle />
        <NewsList />
      </div>
    );
  }

}

export default PublisherNewsListPage
