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
      </div>
      );
  }
}

export default Navigation;
