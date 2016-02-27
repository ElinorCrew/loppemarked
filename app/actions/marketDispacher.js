var instance = null;

// TODO: Finne et bra navn
class MarketsDispatcher {
  constructor() {
    // Making it a sigelton.
    if (!instance) {
      instance = this;
      this.marketChangedListeners = [];
      this.selectedMarked = {};
    }

    return instance;
  }

  selectedMarketChanged(market) {
    this.selectedMarked = market;
    this.marketChangedListeners.map(function (listener) {
      listener(market);
    });
  }
}

export
default MarketsDispatcher;
