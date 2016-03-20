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
}

export default new MarketActions();
