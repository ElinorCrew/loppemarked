import React, { Component, PropTypes } from 'react';
import OpenMarketCard from 'components/OpenMarketCard';

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
      <div className="item">
        <div className="ui card" style={{width: '100%'}} onClick={this._showOpenCard}>
          <div className="content">
            <div className="header">{market.name}</div>
            <div className="meta">
              <span className="category">Om to dager, kl 18:00</span>
              <br />
              <span className="category">{market.address}</span>
            </div>
            <div className="description">
              <p>'sdsd'</p>
            </div>
          </div>
                  <div className = 'extra content'>
            <span className = 'left floated like'>
                <i className = 'like icon'> </i>
                Lik
            </span>
            <span className = 'right floated star'>
                <i className = 'share alternate icon'> </i>
                Del på facebook
            </span >
        </div>
        </div>
        {this.state.showOpenCard ?
            <div className="segment openCardContent" 
                onClick={this._hideOpenCard}
                style={{"position": "fixed",
                        "left": 0,
                        "right": 0,
                        "top": 0,
                        "bottom": 0,
                        "zIndex": 1000,
                        "backgroundColor": "rgba(255,255,255,0.8)"}}>
              <OpenMarketCard market={market}  />
            </div>
          : null}
      </div>
    );
  }
}

MarketCard.propTypes = {
  market: PropTypes.object,
  showOpenCard: PropTypes.func,
  hideOpenCard: PropTypes.func,
};


