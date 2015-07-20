
'use strict'

import React from 'react';
import { Header, MobileHeader } from '../components/Header';

// AboutPage
export default React.createClass({
  render: function () {
    return (
      <div className="page-about">
        <Header />
        <MobileHeader />
        <main class="mdl-layout__content">
	        <h1>About Us</h1>
	        <p>Hello world</p>
        </main>
      </div>
    );
  }
});
