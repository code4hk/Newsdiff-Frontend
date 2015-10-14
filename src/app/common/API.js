
'use strict'

import request from 'request';

var defaultOptions = {
  "success": function () {
    console.log("API request success");
  },
  "error": function () {
    console.error("API request failed");
  }
}

class API {

  // handle http response
  static ajax(err, response, body, options) {
    var _options = Object.assign({}, defaultOptions, options);
    if (!err && response.statusCode == 200) {
      try {
        var j = JSON.parse(body);
        _options.success(JSON.parse(body));
      } catch(err2) {
        _options.error(response, err2);
      }
    } else {
      _options.error(response, err);
    }
  }

  // retrieve publishers
  // GET /api/publishers
  static getPublishers(options) {
    request(env.api_base_url + 'publishers',
      (err, response, body)=>{ this.ajax(err, response, body, options); }
    );
  }

  // retrieve all differed-news
  // GET /api/news
  static getItems(options) {
    request(env.api_base_url + 'news',
      (err, response, body)=>{ this.ajax(err, response, body, options); }
    );
  }

  // retrieve all differed-news from a publisher
  // GET /api/publisher/{publisher_code}/news
  static getPublisherItems(publisher_code, options) {
    request(env.api_base_url + 'publisher/'+publisher_code+'/news',
      (err, response, body)=>{ this.ajax(err, response, body, options); }
    );
  }

  // retrieve details of a differed-news
  // GET /api/news/{news_id}
  static getItem(news_id, options) {
    request(env.api_base_url + 'news/'+news_id,
      (err, response, body)=>{ this.ajax(err, response, body, options); }
    );
  }

  // search for differed-news
  // POST /api/search/news
  static searchItem(options) {
    request(env.api_base_url + 'search/news',
      (err, response, body)=>{ this.ajax(err, response, body, options); }
    );
  }

};

export default API;
