
'use strict'

import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import { Component } from 'react';
import NewsDetailsStore from '../stores/NewsDetailsStore';

@connectToStores
class NewsReview extends Component {

  static getStores() {
    console.log('NewsReview.getStores');
    return [NewsDetailsStore];
  }

  static getPropsFromStores() {
    var state = NewsDetailsStore.getState();
    console.log('NewsReview.getPropsFromStores', state);
    return state;
  }

  render() {
    console.log('render newsreview')
    return (
      <div className="news-item">
        <h1>{this.props.data.title}</h1>
        <ul>
          <li>[<a href={this.props.data.url} target="_blank">
              Original Link
            </a>]
          </li>
          <li>Publisher: {this.props.data.publisher}</li>
          <li>Language: {this.props.data.lang}</li>
          <li>% of change: {this.props.data.changes}</li>
          <li>Created At: {this.props.data.created_at}</li>
          <li>Updated At: {this.props.data.updated_at}</li>
          <li>Last Checked: {this.props.data.last_check}</li>
          <li>Versions: {this.props.data.count}</li>
        </ul>
      </div>
    );
  }

}

export default NewsReview
