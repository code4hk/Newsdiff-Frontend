
'use strict'

import React from 'react';
import NewsList from '../components/NewsList';
import { Header, MobileHeader } from '../components/Header';
import RouteActions from '../actions/RouteActions';

// NewsListPage
export default React.createClass({
  render: function() {
    RouteActions.pageNews();
    return (
      <div className="page-news-list">
        <Header />
        <MobileHeader />
        <main class="mdl-layout__content">
          <h1>News</h1>
          <NewsList />
        </main>
      </div>
    );
  }
});
