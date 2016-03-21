'use strict';

import MarketDispatcher from '../dispatchers/marketDispatcher';
import MarketConstants from '../constants/marketConstants';

class MarketActions {

    select(id) {
        MarketDispatcher.handleViewAction({
            actionType: MarketConstants.MARKET_SELECT,
            id: id
        });
    }

    hover(id) {
        MarketDispatcher.handleViewAction({
            actionType: MarketConstants.MARKET_HOVER,
            id: id
        });
    }
}

export default new MarketActions();
