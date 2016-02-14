import React, { Component, PropTypes } from 'react';
import OpenMarketCard from 'components/OpenMarketCard';
import moment from 'moment';
import 'scss/components/_MarketCard.scss';

const ENTER_KEY_CODE = 13;

export default class MarketCard extends Component {
  constructor(props) {
    super(props);
    this.state = {showOpenCard: false};
    this._showOpenCard = this._showOpenCard.bind(this);
    this._hideOpenCard = this._hideOpenCard.bind(this);
  }

  _showOpenCard() {
    this.setState({showOpenCard: true});
    this.props.selectedMarketChanged(this.props.market.id);
  }

  _hideOpenCard() {
    this.setState({showOpenCard: false});
  }

  render() {
    const {market} = this.props;
    return (
      <div className={'item ' + (market.selected ? 'selectedCard' : '')} onClick={this._showOpenCard}>
        <div className="image">
          <img src={market.imageSmall} />
        </div>
        <div className="middle aligned content">
          <a className="header">{market.name}</a>
          <div className="meta">
            <span className="category">{moment(market.eventDate).calendar()}</span>
            <br/>
            <span className="category">{market.address}</span>
          </div>
          <div className="description">
            <p>{market.description}</p>
          </div>
          <div className="bottom aligned extra">
            <span className = 'like'>
                <i className = 'like icon'></i>Lik
            </span>
            <span className = 'star'>
                <i className = 'share alternate icon'></i>Del på facebook
            </span>
          </div>
        </div>
      </div>
    );
  }
}

MarketCard.propTypes = {
  market: PropTypes.object,
  showOpenCard: PropTypes.func,
  hideOpenCard: PropTypes.func,
};


