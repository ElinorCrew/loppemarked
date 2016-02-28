var singelton = null;

class MarketsDispatcher {
  constructor() {
    if (!singelton) {
      singelton = this;
      singelton.registrerOnSelected = [];
    }
    return singelton;
  }

  select(market) {
    this.registrerOnSelected.map(function (listener) {
      listener.onMarketSelected(market);
    });
  }
}

export default MarketsDispatcher;
