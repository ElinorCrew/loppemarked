import React from 'react';
import MarketCard from 'components/MarketCard';
import Markets from 'actions/markets';


class Map extends React.Component {

  constructor(props){
    super(props);
    this.marketAction = new Markets();
  }

  createMap(geojson){

    mapboxgl.accessToken = "pk.eyJ1Ijoic3RlZmZlbnAiLCJhIjoiY2loYnBxMmtpMHd6M3Vra3RybXZxbjZ2byJ9.NXvjP_UDUfUJZ7_nwhVPzQ";
    self.map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/steffenp/cihby9a4700cjbdm126ge53iq', //stylesheet location
            center: [10.725231170654297, 59.91200869359693], // starting position
            zoom: 12 // starting zoom
          });
    // Add zoom and rotation controls to the map.
    self.map.addControl(new mapboxgl.Navigation({position: 'bottom-right'}));
    self.map.on('style.load', function () {
      self.map.addSource("markers", {
        "type": "geojson",
        "data": geojson       
      });

      self.map.addLayer({
        "id": "markers",
        "type": "symbol",
        "source": "markers",
        "interactive": true,
        "layout": {
          "icon-image": "marker-15",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
        }
      });
      self.map.on('click', function (e) {
        self.map.featuresAt(e.point, {layer: 'markers', radius: 1000, includeGeometry: true}, function (err, features) {
        console.log(features);
          if (err || !features.length)
            return;

          var feature = features[0];

          new mapboxgl.Popup()
          .setLngLat(feature.geometry.coordinates)
          .setHTML('<h1>'+feature.properties.name+'</h1><p>'+feature.properties.description+'</p>')
          .addTo(self.map);
        });
      });

// Use the same approach as above to indicate that the symbols are clickable
// by changing the cursor style to 'pointer'.
self.map.on('mousemove', function (e) {
  self.map.featuresAt(e.point, {layer: 'markers', radius: 10}, function (err, features) {
    self.map.getCanvas().style.cursor = (!err && features.length) ? 'pointer' : '';
  });
});
});
  }

  componentDidMount() {
    this.marketAction.geojson().then(this.createMap);
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

