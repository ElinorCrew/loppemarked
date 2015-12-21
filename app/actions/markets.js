import fetch from 'isomorphic-fetch';
import 'es6-promise';

class Markets {
  constructor() {
    this.baseUrl = '/api/markets/';
  }

  all() {
    return fetch(this.baseUrl, {
      'method': 'GET',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }
}

export default Markets;
