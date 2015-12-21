import React, { Component, PropTypes } from 'react';
import LeftMenu from 'components/LeftMenu';
import Map from 'components/Map';
import Markets from 'scripts/markets';

class MainContent extends Component {
  constructor(props){
    super(props);
    this.state = {markets: []};
  }

  componentDidMount() {
    Markets.all(function(markets) {
      this.setState({
        markets: markets
      });
    }.bind(this));
  }

  render() {
    const markets = this.state.markets;
    return (
            <div>
            <LeftMenu markets={markets}/>
            <Map markets={markets}/>
            </div>
            );
  }
}

export default MainContent;
