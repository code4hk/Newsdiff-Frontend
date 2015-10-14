
'use strict'

import alt from '../common/alt';
import RouteActions from '../actions/RouteActions';
import API from '../common/API';

class NewsDetailsStore {

  constructor() {
    this.bindListeners({
      loadNews: RouteActions.pageNewsDetails
    });

    this.data = {};
  }

  loadNews(params) {
    console.log("NewsListStore.loadNews(id)", params.id);
    API.getItem(params.id, {
      success: (data) => {
        // set the state of the store
        this.setState({data: data});
      },
      error: (response, err) => {
        // report error
        console.error(response, err);
      }
    })
  }

}

export default alt.createStore(NewsDetailsStore, 'NewsDetailsStore');
