import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory} from 'react-router';
import routes from 'components/routes';

// Grab the state from a global injected into
// server-generated HTML
const initialState = window.__INITIAL_STATE__;

render(
    <Router history={hashHistory}>
      {routes}
    </Router> , document.getElementById('entry'));


