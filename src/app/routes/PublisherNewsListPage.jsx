
'use strict'

import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import NewsList from '../components/NewsList';
import NewsListTitle from '../components/NewsListTitle';
import { Header, MobileHeader } from '../components/Header';
import RouteActions from '../actions/RouteActions';

class PublisherNewsListPage extends Component {

  render() {
    var code = this.props.params.code;
    RouteActions.pagePublisherNews(code);
    return (
      <div className="page-news-details">
        <Header />
        <MobileHeader />
        <main class="mdl-layout__content">
          <NewsListTitle />
          <NewsList />
        </main>
      </div>
    );
  }

}

export default PublisherNewsListPage
