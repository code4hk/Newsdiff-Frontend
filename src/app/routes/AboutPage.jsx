
'use strict'

import React from 'react';
import PageMaster from '../routes/PageMaster';

class AboutPage extends PageMaster {
  renderContent() {
    return (
      <div>
        <h1>About Us</h1>
        <p>Hello world</p>
      </div>
    );
  }
}

export default AboutPage;
