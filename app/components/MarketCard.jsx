import React, { Component, PropTypes } from 'react';
import OpenMarketCard from 'components/OpenMarketCard';
import moment from 'moment';
import 'scss/components/_MarketCard.scss';
import MarketsDispatcher from 'actions/marketDispatcher';

export default class MarketCard extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this._toggleOpenCard = this._toggleOpenCard.bind(this);
    this._onMouseOver = this._onMouseOver.bind(this);
    this.marketDispatcher = new MarketsDispatcher();
  }

  _toggleOpenCard() {
    const newOpenState = !this.state.isOpen;
    this.setState({isOpen: newOpenState});
    this.marketDispatcher.select(this.props.market)
  }

  _onMouseOver(){
    this.marketDispatcher.fireOnHover(this.props.market);
  }

  render() {
    const {market} = this.props;
    const {isOpen} = this.state;
    return (
      <div className={'item link marketCard ' + (isOpen ? 'selectedCard' : '')} onClick={this._toggleOpenCard} onMouseOver={this._onMouseOver}>
        <div className="image">
          <img src={market.imageSmall} />
        </div>
        <div className="top aligned content">
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
  toggleOpenCard: PropTypes.func
};


