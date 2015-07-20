
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

    // render parameter
    if (typeof this.props.params == "undefined") {
      var params = {};
    } else {
      var params = this.props.params;
    }
    var params = Object.assign({
      linkClass: "",
      navClass: ""
    }, params);
    var linkClass = params.linkClass;
    var navClass = params.navClass;

    console.log(linkClass);

    var publisherLinks = this.props.data.map(function(data, index) {
      return (
        <Link to="page-publisher-news" className={ linkClass }
          params={{ code: data.code }}>{ data.name }</Link>
      );
    });

    return (
      <nav className={ navClass }>
        <Link to="page-about" className={ linkClass }>關於我們</Link>
        <Link to="page-news" className={ linkClass }>所有新聞來源</Link>
        { publisherLinks }
      </nav>
    );
  }

}

export default Menu
