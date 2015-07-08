
'use strict'

import alt from '../common/alt';
import RouteActions from '../actions/RouteActions';
import API from '../common/API';

class PublishersStore {

  constructor() {
    this.bindListeners({
      loadAll: RouteActions.firstLoad,
    });

    this.data = [];
  }

  loadAll() {
    console.log("PublishersStore.getAll");
    API.getPublishers({
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

export default alt.createStore(PublishersStore, 'PublishersStore');
