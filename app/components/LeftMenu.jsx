import React, {
  Component, PropTypes
}
from 'react';
import _ from 'underscore';
import moment from 'moment';
import MarketCard from 'components/MarketCard';
import DividedMarketList from 'components/DividedMarketList';
import OpenMarketCard from 'components/OpenMarketCard';
import Navigation from 'components/Navigation';
import classNames from 'classnames/bind';
import styles from 'scss/components/_leftmenu';
import MarketsAction from '../actions/marketActions';

const cx = classNames.bind(styles);

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.marketList = this.marketList.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  divideMarkets(markets, divide) {
    return _.chain(markets)
      .groupBy(divide)
      .mapObject(function(markets) {
        return _.sortBy(markets, function(market) {
          return moment(market.eventDate);
        })
      })
      .pairs()
      .value();
  }

  marketList() {
    const {
      select, markets
    } = this.props;
    var divideMarkets = this.divideMarkets;
    var yearDividedMarkets = this.divideMarkets(markets, function(market) {
      return moment(market.eventDate).year();
    });

    return _.chain(yearDividedMarkets)
      .map(function(yearDivided) {
        return divideMarkets(yearDivided[1], function(market) {
          return moment(market.eventDate).month()
        })
      })
      .reduce(function(yearDivider1, yearDivider2) {
        return yearDivider1.concat(yearDivider2);
      }, [])
      .value();
  }

  onMouseOut() {
    //We do not want the bobled events.
    var e = event.toElement || event.relatedTarget || {};
    if (e.parentNode == this || e == this) {
      return;
    }
    MarketsAction.hover(null);
  }

  render() {
    const {
      markets
    } = this.props;
    const dividedMarkets = this.marketList()
    return ( < div className = {
        cx('four', 'wide', 'column', 'leftmenu')
      } >
      < Navigation markets = {
        markets
      }
      />
          <div className='marketList' onMouseOut={this.onMouseOut}>
          {dividedMarkets.map(function (divider) {
              return <DividedMarketList key={divider} markets={divider[1]} divider={moment.months()[divider[0]]}/ >
    })
} < /div>
        </div >
);
}
}

export
default LeftMenu;
