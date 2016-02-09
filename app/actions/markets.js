import $ from 'jquery';

class Markets {
  constructor() {
    this.baseUrl = '/api/markets/';
  }

  all() {
    return $.getJSON(this.baseUrl);
  }

  geojson() {
    return $.getJSON(this.baseUrl + 'geojson/all');
  }

  clean(markets) {
    return markets.map(function (market) {
      market.selected = false;
      return market;
    });
  }
}

export default Markets;
