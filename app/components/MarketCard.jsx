import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import OpenMarketCard from 'components/OpenMarketCard';
import MarketsAction from '../actions/marketActions';
import 'scss/components/_MarketCard.scss';

export default class MarketCard extends Component {
  constructor(props) {
    super(props);
    this._toggleOpenCard = this._toggleOpenCard.bind(this);
    this._onMouseOver = this._onMouseOver.bind(this);
  }

  _toggleOpenCard() {
    MarketsAction.select(this.props.market.id);
  }

  _onMouseOver(){
    MarketsAction.hover(this.props.market.id);
  }

  render() {
    const {market} = this.props;
    return (
      <div className={'item link marketCard ' + (market.selected ? 'selectedCard' : '')} onClick={this._toggleOpenCard} onMouseOver={this._onMouseOver}>
        <div className="image">
          <img src={market.imageSmall} />
        </div>
        <div className="top aligned content">
          <a className="header">{market.name + (market.selected ? '  ###Selected###' : '') + (market.hovered ? '  ###Hovered###' : '')}</a>
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
