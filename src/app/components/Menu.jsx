
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

  componentDidMount() {
    var links = React.findDOMNode(this).getElementsByTagName('a');
    for (let link of links) {
      // TODO: make sure this only be done in browser
      componentHandler.upgradeDom(link);
    }
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

    var links = this.props.data.map(function(data, index) {
      return (
        <Link to="page-publisher-news"
          key={ "page-publisher-" + data.code }
          ref={ "page-publisher-" + data.code }
          className={ linkClass }
          activeClassName="is-active"
          params={{ code: data.code }}>{ data.name }</Link>
      );
    });

    // prepend the important links
    links.unshift(
      <Link to="page-about"
        key="page-about"
        className={ linkClass }
        activeClassName="is-active">關於我們</Link>,
      <Link to="page-news"
        key="page-news"
        className={ linkClass }
        activeClassName="is-active">所有新聞來源</Link>
    );

    return (
      <nav className={ navClass }>
        { links }
      </nav>
    );
  }

}

export default Menu
