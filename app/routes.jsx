
'use strict'

import {Route, DefaultRoute} from 'react-router';
import App from './common/App';
import NewsListPage from './routes/NewsListPage';
import NewsPage from './routes/NewsPage';
import AboutPage from './routes/AboutPage';

// declare our routes and their hierarchy
export default (
  <Route handler={App}>
    <DefaultRoute handler={NewsListPage}/>
    <Route name="page-news" path="/news" handler={NewsListPage}/>
    <Route name="page-news-details" path="/news/:id" handler={NewsPage}/>
    <Route name="page-about" path="/about" handler={AboutPage}/>
  </Route>
);
