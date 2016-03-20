import $ from 'jquery';

class Markets {
  constructor() {
    this.baseUrl = '/api/markets/';
  }

  geojson() {
    return $.getJSON(this.baseUrl + 'geojson/all');
  }
}

export default Markets;
