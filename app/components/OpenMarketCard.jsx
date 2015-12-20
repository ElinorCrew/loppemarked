import React, { Component, PropTypes } from 'react';
const ENTER_KEY_CODE = 13;

export default class OpenMarketCard extends Component {
render(){
    const {market} = this.props;
  
    return (
      <div className="ui centered card middle" style={{"marginTop":"80px", "width": "600px"}}>
        <div className="image">
          <img src="http://www.renas.no/_cached_files/files/yay-1487124_loppemarked.jpg.100.722.417.2012.10.15.9.19.f.2.jpg"/>
        </div>
        <div className="content">
          <a className="header">{market.name}</a>
          <div className="meta">
            <span className="category">Om to dager, kl 18:00</span>
            <br />
            <span className="category">{market.address}</span>
          </div>
          <div className="description">
            <p>{market.description}</p>
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            <i className="heart outline like icon"></i>
            17 likes
          </span>
          <span className="left floated">
          <i className="comment icon"></i>
          3 comments
          </span>
        </div>
      </div>
    );
  }
}

OpenMarketCard.propTypes = {
  market: PropTypes.object
};