import React, { Component, PropTypes } from 'react';
import MarketCard from 'components/MarketCard';
import OpenMarketCard from 'components/OpenMarketCard';
import classNames from 'classnames/bind';
import styles from 'scss/components/_leftmenu';

const cx = classNames.bind(styles);

class LeftMenu extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { selectedMarketChanged } = this.props;
    return (
       <div className={cx('four', 'wide', 'column', 'leftmenu')}>
          <div className="ui divided items">
         {this.props.markets.map(function(market) {
             return <MarketCard key={market.id} market={market} selectedMarketChanged={selectedMarketChanged}/>;
          })}
        </div>
    </div>
    );
  }
}

export default LeftMenu;
