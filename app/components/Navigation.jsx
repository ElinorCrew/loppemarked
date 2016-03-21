import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import MarketActions from 'actions/marketActions';


class Navigation extends Component {
  constructor(props) {
    super(props);
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
