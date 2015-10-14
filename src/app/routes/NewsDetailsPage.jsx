
'use strict'

import React, { Component } from 'react';
import RouteActions from '../actions/RouteActions';
import NewsDetails from '../components/NewsDetails';

class NewsDetailsPage extends Component {
  componentDidMount() {
    RouteActions.pageNewsDetails(this.props.params.id);
  }

  render() {
    return (
      <NewsDetails />
    );
  }
}

export default NewsDetailsPage;
