import React, { Component, PropTypes } from 'react';
import {Router, Link, browserHistory} from 'react-router';

class LandingPage extends Component {

    componentDidMount() {
      $('.ui.dropdown').dropdown({
          onChange: function(){
            debugger;
            browserHistory.push("home");
          }
      });
  }

  render() {
    return (
      <div id="landingBackground">
      <div id="headingBox">
        <h1>Skattekartet</h1> 
        <h3>Gir deg oversikt over loppemarked og andre marked nær deg. <br/> Hvor finner du din neste skatt?</h3>
        <div className="ui floating dropdown labeled search icon button yellow">
  <i className="world icon"></i>
  <span className="text">Velg by</span>
  <div className="menu">
    <div className="item">Oslo</div>
     <div className="item">Trondheim</div>
     <div className="item">Bergen</div>
  </div>
</div>
      </div>
      <button className="circular ui icon button yellow">
  <i className="icon info"></i>
</button>
      </div>
    );
  }
}

export default LandingPage;
