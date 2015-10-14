
'use strict'

import alt from '../common/alt';

class RouteActions {

  // common things to load once the site
  firstLoad() {
    console.log("RouteActions.firstLoad");
    this.dispatch({});
  }

  // a page to read all news
  pageNews() {
    console.log("RouteActions.pageNews");
    this.dispatch({});
  }

  // load a news
  pageNewsDetails(id) {
    console.log("RouteActions.pageNewsDetails(id)", id);
    this.dispatch({id: id});
  }

  // a page to read publisher news
  pagePublisherNews(code) {
    console.log("RouteActions.pagePublisherNews");
    this.dispatch({code: code});
  }

}

export default alt.createActions(RouteActions);
