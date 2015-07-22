
'use strict'

import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import { NewsIdOf } from '../common/utils';
import NewsListItem from '../components/NewsListItem';
import NewsListStore from '../stores/NewsListStore';
import PublishersStore from '../stores/PublishersStore';
import RouteActions from '../actions/RouteActions';

@connectToStores
class NewsList extends Component {

  static getStores() {
    console.log('NewsList.getStores');
    return [NewsListStore, PublishersStore];
  }

  static getPropsFromStores() {
    var news = NewsListStore.getState();
    var pubs = PublishersStore.getState();
    var res = {
      publishers: pubs.data,
      news: news
    }
    console.log('NewsList.getPropsFromStores', res);
    return res;
  }

  publisherInfo(code) {
    var p = this.props.publishers.find((elm, index, array) => {
      return typeof(elm.code) != "undefined" && elm.code == code;
    });
    if (typeof p != "undefined") {
      return p;
    }
    return false;
  }

  publisherName(info) {
    if ((typeof info != "undefined") && (info != false) && (typeof info.name != "undefined")) {
      return info.name;
    } else {
      return '未知新聞來源';
    }
  }

  componentWillMount() {
    if (this.props.publisher_code == "") {
      console.log("publisher_code", this.props.publisher_code);
      RouteActions.pageNews();
    } else if (typeof this.props.publisher_code != "undefined") {
      console.log("publisher_code", this.props.publisher_code);
      RouteActions.pagePublisherNews(this.props.publisher_code);
    } else {
      console.error("No publisher_code");
    }
  }

  render() {
    var newsItems = this.props.news.items.map(function(data, index) {
      return (
        <NewsListItem
          key={NewsIdOf(data)}
          data={data} />
      );
    });
    var title = '所有新聞來源';
    if (this.props.publisher_code != "") {
      var title = this.publisherName(this.publisherInfo(this.props.publisher_code));
    }
    return (
      <div>
        <h1>{title}</h1>
        <div className="news-list">
          {newsItems}
        </div>
      </div>
    );
  }

}

export default NewsList
