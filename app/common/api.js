
'use strict'

var api = {

  // retrieve publishers
  // GET /api/publishers
  "getPublishers": function (options) {
    $.extend(options, {
      url: env.api_base_url + 'publishers',
      dataType: 'json',
      cache: false
    });
    $.ajax(options);
  },

  // retrieve all differed-news
  // GET /api/news
  "getItems": function (options) {
    $.extend(options, {
      url: env.api_base_url + 'news',
      dataType: 'json',
      cache: false
    })
    $.ajax(options);
  },

  // retrieve all differed-news from a publisher
  // GET /api/publisher/{publisher_code}/news
  "getPublisherItems": function (publisher_code, options) {
    $.extend(options, {
      url: env.api_base_url + 'publisher/'+publisher_code+'/news',
      dataType: 'json',
      cache: false
    });
    $.ajax(options);
  },

  // retrieve details of a differed-news
  // GET /api/news/{news_id}
  "getItem": function (news_id, options) {
    $.extend(options, {
      url: env.api_base_url + 'news/'+news_id,
      dataType: 'json',
      cache: false
    });
    $.ajax(options);
  },

  // search for differed-news
  // POST /api/search/news
  "searchItem": function (options) {
    $.extend(options, {
      url: env.api_base_url + 'search/news',
      method: 'POST',
      dataType: 'json',
      cache: false
    });
    $.ajax(options);
  }

};

export default api;
