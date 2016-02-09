import $ from 'jquery';

class Markets {
  constructor() {
    this.baseUrl = '/api/markets/';
  }

  all() {
    return $.getJSON(this.baseUrl);
  }
  geojson(){
  	return $.getJSON(this.baseUrl + 'geojson/all');
  }
}

export default Markets;
