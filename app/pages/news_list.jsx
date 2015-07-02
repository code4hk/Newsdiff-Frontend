
'use strict'

var api = require('../api');

var React = require('react');
var NewsList = require('../components/news_list');
var Menu = require('../components/menu');

// NewsListPage
module.exports = React.createClass({
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
        <Menu />
        <h1>News</h1>
        <NewsList items={this.state.items} />
      </div>
    );
  }
});
