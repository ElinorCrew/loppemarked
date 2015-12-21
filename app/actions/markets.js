import $ from 'jquery';

class Markets {
  constructor() {
    this.baseUrl = '/api/markets/';
  }

  all() {
    return $.getJSON(this.baseUrl);
  }
}

export default Markets;
