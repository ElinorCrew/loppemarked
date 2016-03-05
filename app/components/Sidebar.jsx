import React, { Component, PropTypes } from 'react';
import Route from 'react-router';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui right demo vertical sidebar labeled icon menu">
  <a className="item">
    <i className="add circle icon"></i>
    Registrer marked
  </a>
  <a className="item">
    <i className="info circle icon"></i>
    Om skattekartet
  </a>
</div>
      );
  }
}

export default Sidebar;
