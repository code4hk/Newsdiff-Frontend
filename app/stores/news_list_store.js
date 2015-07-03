
'use strict'

import alt from '../alt';
import RouteActions from '../actions/route_actions';
import api from '../api';

class NewsListStore {

  constructor() {
    this.bindListeners({
      listAll: RouteActions.pageNews,
      listPublisherNews: RouteActions.pagePublisherNews
    });

    this.items = [];
    this.meta = {};
  }

  listAll(params) {
    console.log("NewsListStore.listAll", params);
    api.getItems({
      success: function(data) {
        // set the state of the store
        this.setState({items: data.news, meta: data.meta});
      }.bind(this),
      error: function(xhr, status, err) {
        // report error
        console.error(status, err.toString());
      }.bind(this)
    })
  }

  listPublisherNews() {
    console.log("NewsListStore.listPublisherNews");
  }

}

export default alt.createStore(NewsListStore, 'NewsListStore');
