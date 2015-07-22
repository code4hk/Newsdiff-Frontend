
'use strict'

import React, { Component } from 'react';
import NewsList from '../components/NewsList';

class PublisherNewsListPage extends Component {
  render() {
    return (
      <NewsList publisher_code={this.props.params.code} />
    );
  }
}

export default PublisherNewsListPage
