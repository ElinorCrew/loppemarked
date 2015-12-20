import React from 'react';
import styles from 'scss/components/_map';
import classNames from 'classnames/bind';
// import mapboxgl from 'mapbox-gl';

import ReactDOM from 'react-dom';

const cx = classNames.bind(styles);



export default class Map extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(argument) {

    var options = {
        container: 'map', // container id
        style: 'mapbox://styles/steffenp/cihby9a4700cjbdm126ge53iq', //stylesheet location
        center: [10.725231170654297, 59.91200869359693], // starting position
        zoom: 12 // starting zoom
    };

    debugger;
    mapboxgl.accessToken = "pk.eyJ1Ijoic3RlZmZlbnAiLCJhIjoiY2loYnBxMmtpMHd6M3Vra3RybXZxbjZ2byJ9.NXvjP_UDUfUJZ7_nwhVPzQ";
    var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
    center: [-74.50, 40], // starting position
    zoom: 9 // starting zoom
});
  }

  render() {
    return (
      <div className={cx('fixed','mapContainer')}>
        <div id="map"></div>
      </div>
    );
  }
}
