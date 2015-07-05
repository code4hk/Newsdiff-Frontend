
'use strict'

import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import { Component } from 'react';

import NewsListItem from '../components/NewsListItem';
import NewsListStore from '../stores/NewsListStore';

// extract id from a news item
var newsId = function (item) {
  return item._id.$oid;
}

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
          key={newsId(data)}
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

// NewsList
export default NewsList
