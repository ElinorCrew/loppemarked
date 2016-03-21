'use strict';
import $ from 'jquery';
import _ from 'underscore';
import Events from 'events';

import MarketDispatcher from '../dispatchers/marketDispatcher';
import MarketConstants from '../constants/marketConstants';

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
    }.bind(this));
  }

  clean(markets) {
    return markets.map(function(market) {
      market.selected = false;
      market.hovered = false;
      return market;
    });
  }

  handleAction(payload) {
    const action = payload.action;
    const id = action.id;

    switch (action.actionType) {

      case MarketConstants.MARKET_SELECT:
        if (this.getSelectedId() !== id) {
          this.select(id);
        }else{
          this.select(null); //If we choose the same market twice, we remove it as selected
        }
        this.emitChange();
        break;

      case MarketConstants.MARKET_HOVER:
        if (this.getHoveredId() !== id) {
          this.hover(id);
          this.emitChange();
        }
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  }

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

  hover(id) {
    this.markets = _(this.markets).map(function(market) {
      if (market.id === id) {
        market.hovered = true;
      } else {
        market.hovered = false;
      }
      return market;
    });
  }

  getAll() {
    return this.markets;
  }

  getAllAsPromise() {
    return $.getJSON(this.baseUrl);
  }

  getSelected() {
    return _(this.markets).find(function(market) {
      return market.selected;
    });
  }

  getSelectedId() {
    const selected = this.getSelected() || {};
    return selected.id;
  }

  getHovered() {
    return _(this.markets).find(function(market) {
      return market.hovered;
    });
  }

  getHoveredId() {
    const hovered = this.getHovered() || {};
    return hovered.id;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  isInt(n) {
    return Number(n) === n && n % 1 === 0;
  }
}

export
default new MarketStore();
