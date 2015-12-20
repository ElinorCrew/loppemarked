// var components = require('component');
import React from 'react';
import ReactDOM from 'react-dom';
import LeftMenu from 'components/LeftMenu';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Market from  'scripts/markets';

$(function() {
    ReactDOM.render(<Navigation/>, $('#nav')[0]);
  Market.all(function  (markets) {
    ReactDOM.render(<LeftMenu markets = {markets}/>, $('#Cards')[0]);
  });
  ReactDOM.render(<Footer/>, $('#footer')[0]);
});
