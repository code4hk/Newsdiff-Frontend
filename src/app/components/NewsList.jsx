
'use strict'

import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import { NewsIdOf } from '../common/utils';
import NewsListItem from '../components/NewsListItem';
import NewsListStore from '../stores/NewsListStore';

@connectToStores
class NewsList extends Component {

  static getStores() {
    console.log('NewsList.getStores');
    return [NewsListStore];
  }

  static getPropsFromStores() {
    var state = NewsListStore.getState();
    console.log('NewsList.getPropsFromStores', state);
    return state;
  }

  render() {
    var newsItems = this.props.items.map(function(data, index) {
      return (
        <NewsListItem
          key={NewsIdOf(data)}
          data={data} />
      );
    });
    return (
      <div className="news-list">
        {newsItems}
      </div>
    );
  }

}

export default NewsList
