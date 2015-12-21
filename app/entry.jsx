import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from 'components/routes';

// Grab the state from a global injected into
// server-generated HTML
const initialState = window.__INITIAL_STATE__;
const history = createBrowserHistory();

render(
    <Router history={history}>
      {routes}
    </Router> , document.getElementById('entry'));


