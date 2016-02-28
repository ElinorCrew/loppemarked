var instance = null;

class MarketsDispatcher {
  constructor() {
    // Making it a sigelton.
    if (!instance) {
      instance = this;
      instance.onMarketChanged = [];
      instance.selectedMarked = {};
    }
    return instance;
  }

  selectedMarketChanged(market) {
    this.selectedMarked = market;
    this.onMarketChanged.map(function (listener) {
      listener.onMarketChanged(market);
    });
  }
}

export default MarketsDispatcher;
