
'use strict'

import React, { Component } from 'react';
import { Link } from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import PublishersStore from '../stores/PublishersStore';

@connectToStores
class Menu extends Component {

  static getStores() {
    console.log('PublishersStore.getStores');
    return [PublishersStore];
  }

  static getPropsFromStores() {
    var state = PublishersStore.getState();
    console.log('PublishersStore.getPropsFromStores', state);
    return state;
  }

  render() {
    var publisherLinks = this.props.data.map(function(data, index) {
      return (
        <li><Link to="page-publisher-news"
          params={{ code: data.code }}>{ data.name }</Link></li>
      );
    });
    return (
      <nav className="menu">
        <ul>
          <li><Link to="page-about">關於我們</Link></li>
          <li><Link to="page-news">所有修改</Link></li>
          { publisherLinks }
        </ul>
      </nav>
    );
  }

}

export default Menu
