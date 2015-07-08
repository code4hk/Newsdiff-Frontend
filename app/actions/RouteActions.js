
'use strict'

import alt from '../common/alt';

class RouteActions {

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
  pagePublisherNews(publisher_id) {
    console.log("RouteActions.pagePublisherNews");
    this.dispatch({publisher_id});
  }

}

export default alt.createActions(RouteActions);
