
'use strict'

import React from 'react';
import Router from 'react-router';
import routes from './routes';
import RouteActions from './actions/RouteActions';

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('content'));

  // trigger this anyway, for now
  // TODO: make this aware of the current path
  RouteActions.pageNews("hello");
});
