
'use strict'

import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import App from './common/App';
import NewsListPage from './routes/NewsListPage';
import NewsDetailsPage from './routes/NewsDetailsPage';
import PublisherNewsListPage from './routes/PublisherNewsListPage';
import AboutPage from './routes/AboutPage';
import PageNotFound from './routes/PageNotFound';

// declare our routes and their hierarchy
export default (
  <Route handler={App}>
    <DefaultRoute handler={NewsListPage}/>
    <NotFoundRoute handler={PageNotFound} />
    <Route name="page-news" path="/news" handler={NewsListPage}/>
    <Route name="page-news-details" path="/news/:id" handler={NewsDetailsPage}/>
    <Route name="page-publisher-news" path="/publisher/:code/news" handler={PublisherNewsListPage}/>
    <Route name="page-about" path="/about" handler={AboutPage}/>
  </Route>
);
