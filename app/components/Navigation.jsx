import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Markets from 'actions/markets';
import MarketsDispatcher from 'actions/marketDispatcher';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.marketDispatcher = new MarketsDispatcher();
  }

  componentDidMount() {
    this.marketAction = new Markets();
    this.marketAction.all().then(function(markets) {
      self = this;
      $('.ui.search.searchMarket')
        .search({
          source: markets,
          fields: {
            title: 'name',
            // image: 'imageSmall',
            description: ''
          },
          onSelect: function(result, response) {
            this.marketsDispatcher.selectedMarketChanged(result);
          }
        });
    });
    $('.ui.dropdown').dropdown();
  }

  toggleBar() {
    $('.ui.sidebar')
      .sidebar('toggle');
  }

  render() {
    const {dispatch} = this.props;
    return (
      <div className = "ui menu fixed">
      <i className="big sidebar icon" onClick={this.toggleBar}></i>
        <Link className = "header item " to="/">Skattekartet</Link>  
        <div className="ui category search right item searchMarket">
            <div className="ui icon input">
              <input className="prompt" type="text" placeholder="Søk etter marked..."/>
              <i className="search link icon"></i>
            </div>
            <div className="results"></div>
        </div>
      </div>
      );
  }
}

export default Navigation;
