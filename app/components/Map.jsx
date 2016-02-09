import React from 'react';
import MarketCard from 'components/MarketCard';


class Map extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1Ijoic3RlZmZlbnAiLCJhIjoiY2loYnBxMmtpMHd6M3Vra3RybXZxbjZ2byJ9.NXvjP_UDUfUJZ7_nwhVPzQ";
    self.map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/steffenp/cihby9a4700cjbdm126ge53iq', //stylesheet location
            center: [10.725231170654297, 59.91200869359693], // starting position
            zoom: 12 // starting zoom
          });
    // Add zoom and rotation controls to the map.
    self.map.addControl(new mapboxgl.Navigation({position: 'bottom-right'}));
  }

  render() {
    this.props.markets.map(function(market){
      map.setCenter([market.lng, market.lat]);
      
      var tooltip = new mapboxgl.Popup()
      .setLngLat([market.lng,market.lat])
      .setHTML('<h3>'+market.name+'</h3><p>'+market.description+'</p>')
      .addTo(map);
    })

    return(
           <div className="fixed" id="mapContainer">
           <div id="map"></div>
           </div>
           );
  }
}

export default Map;

