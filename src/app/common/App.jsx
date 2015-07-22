
'use strict'

import {RouteHandler} from 'react-router';
import React from 'react';
import {Header, MobileHeader} from '../components/Header';

export default React.createClass({
  render () {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header />
        <MobileHeader />
        <main class="mdl-layout__content">
          <RouteHandler/>
        </main>
      </div>
    );
  }
});
