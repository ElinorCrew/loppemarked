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
    const { dispatch } = this.props;
    return (
       <div className={cx('four', 'wide', 'column', 'leftmenu')}>
          <div className="ui list">
         {this.props.markets.map(function(market) {
             return <MarketCard key={market.id} market={market}/>;
          })}
        </div>
    </div>
    );
  }
}

LeftMenu.propTypes = {
  topic: PropTypes.string,
  dispatch: PropTypes.func
};

export default LeftMenu;
