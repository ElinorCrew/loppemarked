import React from 'react';
import Route from 'react-router';

import MainContent from 'components/MainContent';
import App from 'components/App';
import CreateNewMarket from 'components/CreateNewMarket';


export default (
  <Route component={App}>
    <Route path="/" component={MainContent} />
    <Route path="newmarket" component={CreateNewMarket} />
  </Route>
);
