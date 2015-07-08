
'use strict'

import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import { NewsIdOf } from '../common/utils';
import NewsListItem from '../components/NewsListItem';
import NewsListStore from '../stores/NewsListStore';
import PublishersStore from '../stores/PublishersStore';

@connectToStores
class NewsListTitle extends Component {

  static getStores() {
    console.log('NewsList.getStores');
    return [NewsListStore, PublishersStore];
  }

  static getPropsFromStores() {
    var state = NewsListStore.getState();
    var pubs = PublishersStore.getState();
    console.log('NewsList.getPropsFromStores', state);
    return {
      publishers: pubs.data,
      publisher: state.publisher,
      code: state.code
    };
  }

  getPublisher(code) {
    var p = this.props.publishers.find((elm, index, array) => {
      return typeof(elm.code) != "undefined" && elm.code == code;
    });
    if (typeof p != "undefined") {
      return p;
    }
    return false;
  }

  render() {
    var p = this.getPublisher(this.props.code);
    if (p != false) {
      return (
        <h1>{ p.name }</h1>
      );
    } else {
      return (
        <p>Loading...</p>
      );
    }
  }

}

export default NewsListTitle
