import React, { Component, PropTypes } from 'react';
import OpenMarketCard from 'components/OpenMarketCard';
import moment from 'moment';
import 'scss/components/_MarketCard.scss';

export default class MarketCard extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this._toggleOpenCard = this._toggleOpenCard.bind(this);
  }

  _toggleOpenCard() {
    const newState = !this.state.isOpen;

    this.setState({isOpen: newState});
    this.props.selectedMarketChanged(this.props.market.id);
  }

  render() {
    const {market} = this.props;
    const isOpen = this.state.isOpen;
    return (
      <div className={'item marketCard ' + (isOpen ? 'selectedCard' : '')} onClick={this._toggleOpenCard}>
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
          <div className="bottom aligned description">
            <p>Dette er en test av hvordan ekstra informasjon om markeder kan representeres i en lengre tekst under kortet.</p>
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
