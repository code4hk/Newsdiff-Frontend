
'use strict'

import React from 'react';
import RouteActions from '../actions/RouteActions';
import PageMaster from '../routes/PageMaster';
import NewsDetails from '../components/NewsDetails';

class NewsDetailsPage extends PageMaster {
  renderContent() {
    return (
      <NewsDetails />
    );
  }
}

export default NewsDetailsPage;
