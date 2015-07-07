
'use strict'

import {Route, DefaultRoute} from 'react-router';
import App from './common/App';
import NewsListPage from './pages/NewsListPage';
import AboutPage from './pages/AboutPage';

// declare our routes and their hierarchy
export default (
  <Route handler={App}>
    <DefaultRoute handler={NewsListPage}/>
    <Route name="page-news" path="news" handler={NewsListPage}/>
    <Route name="page-about" path="about" handler={AboutPage}/>
  </Route>
);
