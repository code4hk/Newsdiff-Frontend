
'use strict'

import alt from '../common/alt';
import RouteActions from '../actions/RouteActions';
import API from '../common/API';

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
    API.getItems({
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
