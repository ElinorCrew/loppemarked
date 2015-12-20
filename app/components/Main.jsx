import React, { Component, PropTypes } from 'react';
import LeftMenu from 'components/LeftMenu';

import Map from 'components/Map';
import Footer from 'components/Footer';
import classNames from 'classnames/bind';
import styles from 'scss/main';


const cx = classNames.bind(styles);

class Main extends Component {

  render() {
    return (
        <div>
        <LeftMenu id="Cards" /> 
        <Map/>
        </div>
    );
  }
}

Main.propTypes = {
};

export default Main;
