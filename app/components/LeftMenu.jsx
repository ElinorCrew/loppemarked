import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import moment from 'moment';
import MarketCard from 'components/MarketCard';
import DividedMarketList from 'components/DividedMarketList';
import OpenMarketCard from 'components/OpenMarketCard';
import Navigation from 'components/Navigation';
import classNames from 'classnames/bind';
import styles from 'scss/components/_leftmenu';

const cx = classNames.bind(styles);

class LeftMenu extends Component {
  constructor(props){
    super(props);
    this.marketList = this.marketList.bind(this);
  }

  divideMarkets(markets, divide) {
     return _.chain(markets)
             .groupBy(divide) 
             .mapObject(function (markets) {
               return _.sortBy(markets, function (market) {return moment(market.eventDate);})
             })
             .pairs()
             .value();
  }

  marketList() {
    const { selectedMarketChanged, markets } = this.props;
    var divideMarkets = this.divideMarkets;
    var yearDividedMarkets = this.divideMarkets(markets, function (market) {return moment(market.eventDate).year();});
            
    return _.chain(yearDividedMarkets)
            .map(function (yearDivided) {
              return divideMarkets(yearDivided[1], function (market) {return moment(market.eventDate).month()})
            })
            .reduce(function (yearDivider1, yearDivider2) {
              return yearDivider1.concat(yearDivider2);
            }, [])
            .value();
  }

  render() {
    const {markets } = this.props;
    const dividedMarkets = this.marketList()
    return (
        <div className={cx('four', 'wide', 'column', 'leftmenu')}>
          <Navigation markets={markets}/>
          <div className='marketList'>
          {dividedMarkets.map(function (divider) {
              return <DividedMarketList key={divider} markets={divider[1]} divider={moment.months()[divider[0]]}/>
            })}
        </div>
        </div>
    );
  }
}

export default LeftMenu;

