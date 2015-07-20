
'use strict'

import React from 'react';
import RouteActions from '../actions/RouteActions';
import PageMaster from '../routes/PageMaster';
import NewsList from '../components/NewsList';
import NewsListTitle from '../components/NewsListTitle';

class PublisherNewsListPage extends PageMaster {
  renderContent() {
    var code = this.props.params.code;
    RouteActions.pagePublisherNews(code);
    return (
      <div>
        <NewsListTitle />
        <NewsList />
      </div>
    );
  }
}

export default PublisherNewsListPage
