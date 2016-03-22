import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory} from 'react-router';
import routes from 'components/routes';

// Grab the state from a global injected into
// server-generated HTML
const initialState = window.__INITIAL_STATE__;

render(
    <Router history={browserHistory}>
      {routes}
    </Router> , document.getElementById('entry'));


