import React, {
  Component, PropTypes
}
from 'react';
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
      this.selectedMarketId = markets[0].id;
      this.selectedMarket = markets[0];
      this._selectedMarketChanged(this.selectedMarketId);
    }.bind(this));
  }

  _selectedMarketChanged(selectedMarketId) {
    var markets = this.state.markets;
    var selectedMarket = markets.find(function (market) {
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
      <Map markets={this.state.markets} selectedMarket={this.selectedMarket} selectedMarketChanged={this._selectedMarketChanged} />
      </div>
    );
  }
}

export default MainContent;
