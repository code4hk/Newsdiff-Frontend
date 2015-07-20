
'use strict'

import React from 'react';
import PageMaster from '../routes/PageMaster';

class PageNotFound extends PageMaster {
  renderContent() {
    return (
      <div>
        404 Not Found
      </div>
    );
  }
}

export default PageNotFound
