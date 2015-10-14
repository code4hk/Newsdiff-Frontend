
'use strict'

import React from 'react';
import { Link } from 'react-router';
import { NewsIdOf } from '../common/utils';

// NewsListItem
export default React.createClass({
  render: function() {
    return (
      <div className="news-item">
        <h3><Link to="page-news-details" params={{ id: NewsIdOf(this.props.data) }}>
          {this.props.data.title}
        </Link></h3>
        <ul>
          <li>[<a href={this.props.data.url} target="_blank">
              Original Link
            </a>]
          </li>
          <li>Publisher: {this.props.data.publisher}</li>
          <li>Language: {this.props.data.lang}</li>
          <li>% of change: {this.props.data.changes}</li>
          <li>Created At: {this.props.data.created_at}</li>
          <li>Updated At: {this.props.data.updated_at}</li>
          <li>Last Checked: {this.props.data.last_check}</li>
          <li>Versions: {this.props.data.count}</li>
        </ul>
      </div>
    );
  }
});
