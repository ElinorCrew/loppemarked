'use strict';
import $ from 'jquery';
import MarketDispatcher from '../dispatcher/marketDispatcher';
import MarketConstants from '../constants/market-constants';
import Events from 'events';

const CHANGE_EVENT = 'change';

class MarketStore extends Events.EventEmitter {

    constructor(props) {
        super(props);
        this.dispatcherIndex = MarketDispatcher.register(this.handleAction.bind(this));
        let markets = [];
        $.getJSON(this.baseUrl).then(function (data) {
            markets = clean(data);
        })
        this.markets = markets;
    }


    clean(markets) {
        return markets.map(function (market) {
          market.selected = false;
          return market;
      });
    }

    handleAction(payload) {

        let action = payload.action;
        let text = '';

        switch(action.actionType) {

            case MarketConstants.TODO_CREATE:

            text = action.text.trim();
            if (text === '') { break; }

            this.create(text);
            this.emitChange();

            break;

            case MarketConstants.TODO_DESTROY:
            this.destroy(action.id);
            this.emitChange();
            break;

        }

        return true; // No errors. Needed by promise in Dispatcher.
    }

    /**
     * Creates a market item
     */
     create(text) {

        let ID = Date.now();

        this.markets[ID] = {
            id: ID,
            complete: false,
            text: text
        };

    }

    /**
     * Destroys a market item
     * @param  {string} id ID of the market item
     */
     destroy(id) {
        delete this.markets[id];
    }

    /**
    * Get the entire collection of TODOs.
    * @return {object}
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

}

export default new MarketStore();
