
'use strict'

import React from 'react';
import Menu from '../components/menu';

// AboutPage
export default React.createClass({
  render: function () {
    return (
      <div className="page-about">
        <Menu />
        <h1>About Us</h1>
        <p>Hello world</p>
      </div>
    );
  }
});
