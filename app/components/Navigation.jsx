import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Markets from 'actions/markets';
import MarketsDispatcher from 'dispatchers/marketDispatcher';


class Navigation extends Component {
  constructor(props) {
    super(props);
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
            MarketsDispatcher.select(result);
          }
        });
    });
    $('.ui.dropdown').dropdown();
  }

  render() {
    const {dispatch} = this.props;
    return (
      <div className = "ui menu fixed">
        <Link className = "header item " to="/">Skattekartet</Link>  
      </div>
      );
  }
}

export default Navigation;
