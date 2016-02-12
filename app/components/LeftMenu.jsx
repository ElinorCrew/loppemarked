import React, { Component, PropTypes } from 'react';
import MarketCard from 'components/MarketCard';
import OpenMarketCard from 'components/OpenMarketCard';
import Navigation from 'components/Navigation';
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
        <Navigation markets={this.props.markets} selectedMarketChanged={selectedMarketChanged}/>
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
