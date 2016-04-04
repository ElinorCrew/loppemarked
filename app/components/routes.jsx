import React from 'react';
import {Route} from 'react-router';

import MainContent from 'components/MainContent';
import App from 'components/App';
import LandingPage from 'components/LandingPage';

export default (
  <Route component={App}>
  <Route path="/" component={LandingPage} />
    <Route path="/home" component={MainContent} />
  </Route>
);
