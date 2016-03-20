import React, {
  Component, PropTypes
}
from 'react';
import _ from 'underscore';
import LeftMenu from 'components/LeftMenu';
import Map from 'components/Map';
import MarketStore from 'stores/marketStore';
import MarketsDispatcher from 'dispatchers/marketDispatcher';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markets: [],
    };
    this.selectedMarketId = 0;
    this.selectedMarket = {};
  }

  componentDidMount() {
    MarketStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    MarketStore.removeChangeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState({
      markets: MarketStore.getAll(),
    });
  }

  onMarketSelected(selectedMarket) {
    var markets = this.state.markets;
    if (selectedMarket === parseInt(selectedMarket, 10)) {
      this.selectedMarket = _.find(markets, function(market) {
        return market.id === selectedMarket
      });
    } else {
      this.selectedMarket = selectedMarket;
    }

    if (this.selectedMarket != undefined) {
      markets = MarketStore.clean(markets);
      this.selectedMarket.selected = true;
      this.selectedMarket = selectedMarket;

      this.setState({
        markets: markets
      })
    }
  }

  toggleBar() {
    $('.ui.sidebar')
      .sidebar('toggle');
  }

  render() {
    return ( < div >
        < button id = "sidebarButton"
        className = "yellow circular big ui icon button"
        onClick = {
          this.toggleBar
        } >
        < i className = "ellipsis vertical icon" > < /i>
          </button >
        < LeftMenu markets = {
          this.state.markets
        }
        />
          <Map markets={this.state.markets}/ >
        < /div>
          );
}
}

export default MainContent;
