
'use strict'

import React from 'react';
import RouteActions from '../actions/RouteActions';
import PageMaster from '../routes/PageMaster';
import NewsDetails from '../components/NewsDetails';

class NewsDetailsPage extends PageMaster {
  componentWillMount() {
    RouteActions.pageNewsDetails(this.props.params.id);
  }

  renderContent() {
    return (
      <NewsDetails />
    );
  }
}

export default NewsDetailsPage;
