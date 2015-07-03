
'use strict'

import {Route, DefaultRoute} from 'react-router';
import NewsListPage from './pages/news_list'
import AboutPage from './pages/about'

// declare our routes and their hierarchy
export default (
  <Route handler={App}>
    <DefaultRoute handler={NewsListPage}/>
    <Route path="news" handler={NewsListPage}/>
    <Route path="about" handler={AboutPage}/>
  </Route>
);
