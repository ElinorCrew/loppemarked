import React, {
  Component, PropTypes
}
from 'react';
import _ from 'underscore';
import LeftMenu from 'components/LeftMenu';
import Map from 'components/Map';
import Markets from 'actions/markets';
import MarketsDispatcher from 'actions/marketDispatcher';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markets: [],
    };
    this.marketAction = new Markets();
    this.marketDispatcher = new MarketsDispatcher();
  }

  componentDidMount() {
    this.marketDispatcher.onMarketChanged.push(this);
    this.marketAction.all().then(function (markets) {
      markets = this.marketAction.clean(markets);
      this.setState({
        markets: markets,
      });
      this.marketDispatcher.selectedMarketChanged(_.first(markets))
    }.bind(this));
  }

  onMarketChanged(selectedMarket) {
    var markets = this.state.markets;
    var selectedMarket = markets.find(function (market) {
      return market.id === selectedMarket.id
    });

    if (selectedMarket != undefined) {
      markets = this.marketAction.clean(markets);
      this.selectedMarket = selectedMarket;
      selectedMarket.selected = true;
      this.selectedMarket = selectedMarket;

      this.setState({
        markets: markets
      })
    }
  }

  render() {
    return (
      <div>
      <LeftMenu markets={this.state.markets}/>
      <Map markets={this.state.markets}/>
      </div>
    );
  }
}

export default MainContent;
