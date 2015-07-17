
'use strict'

import React from 'react';
import Router from 'react-router';
import routes from './routes';
import RouteActions from './actions/RouteActions';

// load PublishersStore so it can listen to firstLoad
import PublishersStore from './stores/PublishersStore';

RouteActions.firstLoad();
Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, document.getElementById('content'));
});

// hello
