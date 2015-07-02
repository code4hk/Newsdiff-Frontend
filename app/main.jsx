
'use strict'

var React = require('react');
var api = require('./api.js');

// extract id from a news item
var newsId = function (item) {
  return item._id.$oid;
}

var NewsListItem = React.createClass({
  render: function() {
    return (
      <div className="news-item">
        <h3>{this.props.data.title}</h3>
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

var NewsList = React.createClass({
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

var NewsListPage = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      meta: {}
    };
  },  
  componentDidMount: function() {
    api.getItems({
      success: function(data) {
        console.log('items', data.news);
        this.setState({items: data.news, meta: data.meta});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  },
  render: function() {
    return (
      <div className="page-front">
        <h1>News</h1>
        <NewsList items={this.state.items} />
      </div>
    );
  }
});

React.render(
  <NewsListPage />,
  document.getElementById('content')
);
