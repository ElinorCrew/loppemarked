import React, { Component, PropTypes } from 'react';
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
    this.selectedMarketId = 0;
    this.selectedMarket = {};
    this.marketAction = new Markets();
    this.marketDispatcher = new MarketsDispatcher();
    this.marketDispatcher.registrerOnSelected.push(this);
  }

  componentDidMount() {
    this.marketAction.all().then(function (markets) {
      markets = this.marketAction.clean(markets);
      this.setState({
        markets: markets,
      });
      this.marketDispatcher.select(_.first(markets))
    }.bind(this));
  }

  onMarketSelected(selectedMarket) {
    var markets = this.state.markets;
    if (selectedMarket === parseInt(selectedMarket, 10)) {
      this.selectedMarket = _.find(markets, function (market) {
        return market.id === selectedMarket
      });
    }else {
      this.selectedMarket = selectedMarket;
    }

    if (this.selectedMarket != undefined) {
      markets = this.marketAction.clean(markets);
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
    return (
            <div>
            <button id="sidebarButton" className="yellow circular big ui icon button" onClick={this.toggleBar}>
              <i className="ellipsis vertical icon"></i>
            </button>
            <LeftMenu markets={this.state.markets}/>
            <Map markets={this.state.markets}/>
            </div>
            );
  }
}

export default MainContent;
