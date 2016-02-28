import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import LeftMenu from 'components/LeftMenu';
import Map from 'components/Map';
import Markets from 'actions/markets';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markets: [],
    };
    this.selectedMarketId = 0;
    this.selectedMarket = {};
    this.marketAction = new Markets();
    this._selectedMarketChanged = this._selectedMarketChanged.bind(this);
  }

  componentDidMount() {
    this.marketAction.all().then(function (markets) {
      markets = this.marketAction.clean(markets);
      this.setState({
        markets: markets,
      });
      var nextMarket = this.getNextMarket(markets);
      this.selectedMarketId = nextMarket.id;
      this.selectedMarket = nextMarket;
      this._selectedMarketChanged(this.selectedMarketId);
    }.bind(this));
  }

  getNextMarket(markets){
    var market = markets[0];
    for (var i = markets.length - 1; i >= 0; i--) {
      if(markets[i].eventDate < market.eventDate){
        market = markets[i]
      }
    }
    return market;
  }

  _selectedMarketChanged(selectedMarketId) {
    var markets = this.state.markets;
    var selectedMarket = _.find(markets, function (market) {
      return market.id === selectedMarketId
    });

    if (selectedMarket != undefined) {
      markets = this.marketAction.clean(markets);
      this.selectedMarket = selectedMarket;
      selectedMarket.selected = true;
      this.selectedMarketId = selectedMarketId;

      this.setState({
        markets: markets
      })
    }
  }

  render() {
    return (
      <div>
      <LeftMenu markets={this.state.markets} selectedMarketChanged={this._selectedMarketChanged}/>
      <Map markets={this.state.markets} selectedMarket={this.selectedMarket} selectedMarketChanged={this._selectedMarketChanged.bind(this)} />
      </div>
    );
  }
}

export default MainContent;
