'use strict';
import $ from 'jquery';
import _ from 'underscore';

import MarketDispatcher from '../dispatchers/marketDispatcher';
import MarketConstants from '../constants/marketConstants';
import Events from 'events';

const CHANGE_EVENT = 'change';

class MarketStore extends Events.EventEmitter {

  constructor(props) {
    super(props);
    this.baseUrl = '/api/markets/';
    this.dispatcherIndex = MarketDispatcher.register(this.handleAction.bind(this));
    this.markets = [];
    this.refreshCashe();
  }

  refreshCashe() {
    $.getJSON(this.baseUrl).then(function(data) {
      this.markets = this.clean(data);
        this.emitChange();
    }.bind(this))
  }

  clean(markets) {
    return markets.map(function(market) {
      market.selected = false;
      return market;
    });
  }

  handleAction(payload) {
    debugger;
    const action = payload.action;
    let id = -1;

    switch (action.actionType) {

      case MarketConstants.MARKET_SELECT:

        id = action.id;
        if (id === -1 || !isInt(id)) {
          break;
        }

        this.select(id);
        this.emitChange();

        break;

    }

    return true; // No errors. Needed by promise in Dispatcher.
  }

  /**
   * Select a market item
   */
  select(id) {
    this.markets = _(this.markets).map(function(market) {
      if (market.id === id) {
        market.selected = true;
      } else {
        market.selected = false;
      }
      return market;
    });
  }

  /**
   * Get the entire collection of Markets.
   */
  getAll() {
    return this.markets;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  isInt(n) {
    return Number(n) === n && n % 1 === 0;
  }

}

export
default new MarketStore();
