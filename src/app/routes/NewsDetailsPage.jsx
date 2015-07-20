
'use strict'

import React from 'react';
import NewsDetails from '../components/NewsDetails';
import { Header, MobileHeader } from '../components/Header';
import RouteActions from '../actions/RouteActions';

// NewsListPage
export default React.createClass({
  render: function() {
    RouteActions.pageNewsDetails(this.props.params.id);
    return (
      <div className="page-news-details mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header />
        <MobileHeader />
        <main class="mdl-layout__content">
        	<NewsDetails />
        </main>
      </div>
    );
  }
});
