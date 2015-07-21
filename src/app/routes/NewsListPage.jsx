
'use strict'

import React from 'react';
import RouteActions from '../actions/RouteActions';
import PageMaster from '../routes/PageMaster';
import NewsList from '../components/NewsList';

class NewsListPage extends PageMaster {
  renderContent() {
    RouteActions.pageNews();
    return (
      <div>
        <NewsList />
      </div>
    );
  }
}

export default NewsListPage;
