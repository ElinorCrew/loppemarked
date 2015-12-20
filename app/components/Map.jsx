import React from 'react';

class Map extends React.Component {
  componentDidMount() {

      mapboxgl.accessToken = "pk.eyJ1Ijoic3RlZmZlbnAiLCJhIjoiY2loYnBxMmtpMHd6M3Vra3RybXZxbjZ2byJ9.NXvjP_UDUfUJZ7_nwhVPzQ";
      var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/steffenp/cihby9a4700cjbdm126ge53iq', //stylesheet location
            center: [10.725231170654297, 59.91200869359693], // starting position
            zoom: 12 // starting zoom
        });

      var tooltip = new mapboxgl.Popup({closeOnClick: false})
      .setLngLat([10.7273769,59.9170428])
      .setHTML('<h3>Slottsparken loppemarked</h3><p>Om to dager, kl 18:00. Schweigaardsgate 41, 0366 OSLO</p>')
      .addTo(map);
  }

  render() {
    return(
           <div className="fixed" id="mapContainer">
           <div id="map"></div>
           </div>
           );
    }
}

export default Map;

