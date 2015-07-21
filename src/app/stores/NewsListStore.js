
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

    this.publisher_code = '';
    this.items = [];
    this.meta = {};
  }

  listAll(params) {
    console.log("NewsListStore.listAll", params);
    API.getItems({
      success: (data) => {
        // set the state of the store
        this.setState({
          publisher_code: '',
          items: data.news,
          meta: data.meta
        });
      },
      error: (response, err) => {
        // report error
        console.error(response, err);
      }
    })
  }

  listPublisherNews(params) {
    console.log("NewsListStore.listPublisherNews", params);
    API.getPublisherItems(params.code, {
      success: (data) => {
        // set the state of the store
        this.setState({
          publisher_code: params.code,
          items: data.news,
          meta: data.meta
        });
      },
      error: (response, err) => {
        // report error
        console.error(response, err);
      }
    })
  }

}

export default alt.createStore(NewsListStore, 'NewsListStore');
