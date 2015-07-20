
'use strict'

import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from '../components/Menu';

// Desktop Header
export class Header extends Component {

  render() {
    return (
      <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
        <div className="mdl-layout--large-screen-only mdl-layout__header-row">
        </div>
        <div className="mdl-layout__header-row">
        <h3>NewsDiff HK</h3>
        </div>
        <div className="mdl-layout--large-screen-only mdl-layout__header-row">
        </div>
        <div className="mdl-layout--large-screen-only mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
          <Menu params={{ navClass: "menu", linkClass: "mdl-layout__tab" }} />
        </div>
      </header>
    );
  }

}

// Mobile Header
export class MobileHeader extends Header {

  render() {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">NewsDiff HK Menu</span>
        <Menu params={{ navClass: "mdl-navigation", linkClass: "mdl-navigation__link" }} />
      </div>
    );
  }

}

export default Header
