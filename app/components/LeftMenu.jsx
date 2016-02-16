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

  dateComparator(){
      return function (m1,m2) {
      return m1.eventDate > m2.eventDate
    }
  }

  sortMarkets(markets){
    if(true){ // if sort by date is true
      return markets.sort(this.dateComparator);
    }
  }

  marketList() {
    const { selectedMarketChanged, markets } = this.props;
    var toList = function (list) {
                    return Object.keys(list).map(function(key){
                        return [key, list[key]]
                      })
    }
    var yearDividedMarkets =  toList(_.chain(markets)
                                      .sortBy(function (market) {return market.eventDate;})
                                      .groupBy(function (market) {return moment(market.eventDate).year();})
                                      .reverse()
                                      .value())
            
    var l = _.chain(yearDividedMarkets).map(function (yearDivider) {
                return toList(_.groupBy(yearDivider[1], function (market) {return moment(market.eventDate).month()}))})
              .reduce(function (yearDivider1, yearDivider2) {return yearDivider1.concat(yearDivider2);},[])
              .value();
    return l
  }

  render() {
    const { selectedMarketChanged, markets } = this.props;
    const dividedMarkets = this.marketList()
    return (
        <div className={cx('four', 'wide', 'column', 'leftmenu')}>
          <Navigation markets={markets} selectedMarketChanged={selectedMarketChanged}/>
          <div className='marketList'>
          {dividedMarkets.map(function (divider) {
              return <DividedMarketList key={divider} markets={divider[1]} divider={moment.months()[divider[0]]} selectedMarketChanged={selectedMarketChanged}/>
            })}
        </div>
        </div>
    );
  }
}

export default LeftMenu;

