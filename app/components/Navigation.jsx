import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  componentDidMount() {
    $('.ui.dropdown').dropdown();
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div className = "ui menu">
        <Link className = "header item" to="/">Skattekartet</Link>  
        <div className="ui category search right item ">
            <div className="ui transparent icon input">
              <input className="prompt" type="text" placeholder="Search markets..."/>
              <i className="search link icon"></i>
            </div>
            <div className="results"></div>
        </div>
      </div>
    );
  }
}

export default Navigation;
