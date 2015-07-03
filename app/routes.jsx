
'use strict'

import {Route, DefaultRoute} from 'react-router';
import App from './app';
import NewsListPage from './pages/news_list_page';
import AboutPage from './pages/about_page';

// declare our routes and their hierarchy
export default (
  <Route handler={App}>
    <DefaultRoute handler={NewsListPage}/>
    <Route path="news" handler={NewsListPage}/>
    <Route path="about" handler={AboutPage}/>
  </Route>
);
