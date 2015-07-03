
'use strict'

import React from 'react';
import NewsListItem from './news_list_item';

// extract id from a news item
var newsId = function (item) {
  return item._id.$oid;
}

// NewsList
export default React.createClass({
  render: function() {
    var newsItems = this.props.items.map(function(data, index) {
      return (
        <NewsListItem
          key={newsId(data)}
          data={data} />
      );
    });
    return (
      <div className="news-list">
        {newsItems}
      </div>      
    );
  }
});
