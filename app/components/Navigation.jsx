import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Markets from 'actions/markets';

class Navigation extends Component {


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
            self.props.selectedMarketChanged(result.id);
          }
        });
    });
    $('.ui.dropdown').dropdown();

  }

  render() {
    const {dispatch} = this.props;
    return (
      <div className = "ui menu">
        <Link className = "header item" to="/">Skattekartet</Link>  
        <div className="ui category search right item searchMarket">
            <div className="ui transparent icon input">
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
