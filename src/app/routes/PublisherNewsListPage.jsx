
'use strict'

import React from 'react';
import RouteActions from '../actions/RouteActions';
import PageMaster from '../routes/PageMaster';
import NewsList from '../components/NewsList';

class PublisherNewsListPage extends PageMaster {
  renderContent() {
    var code = this.props.params.code;
    RouteActions.pagePublisherNews(code);
    return (
      <div>
        <NewsList />
      </div>
    );
  }
}

export default PublisherNewsListPage
