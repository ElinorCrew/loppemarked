var singelton = null;

class MarketsDispatcher {
  constructor() {
    if (!singelton) {
      singelton = this;
      singelton.registrerOnSelected = [];
      singelton.registrerOnHover = [];
    }
    return singelton;
  }

  select(market) {
    this.registrerOnSelected.map(function (listener) {
      listener.onMarketSelected(market);
    });
  }

  fireOnHover(market) {
    this.registrerOnHover.map(function (listener) {
      listener.onMarketHover(market);
    });
  }
}

export default MarketsDispatcher;
