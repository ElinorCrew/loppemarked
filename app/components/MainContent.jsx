import React, { Component, PropTypes } from 'react';
import LeftMenu from 'components/LeftMenu';
import Map from 'components/Map';
import Markets from 'actions/markets';

class MainContent extends Component {
  constructor(props){
    super(props);
    this.state = {markets: []};
    this.marketAction = new Markets();
  }

  componentDidMount() {
    this.marketAction.all().then(function(markets) {
      this.setState({
        markets: markets,
        selectedMarket : markets[0]
      });
    }.bind(this));
  }

  render() {
    return (
            <div>
            <LeftMenu markets={this.state.markets}/>
            <Map markets={this.state.markets} selectedMarket={this.state.selectedMarket}/>
            </div>
            );
  }
}

export default MainContent;
