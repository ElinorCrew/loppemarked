import React from 'react';
import MarketCard from 'components/MarketCard';
import Markets from 'actions/markets';
import Search from 'components/Search';



class Map extends React.Component {

  constructor(props) {
    super(props);
    this.marketAction = new Markets();
    this.map = {};
  }

  createMap(geojson) {
    mapboxgl.accessToken = "pk.eyJ1Ijoic3RlZmZlbnAiLCJhIjoiY2loYnBxMmtpMHd6M3Vra3RybXZxbjZ2byJ9.NXvjP_UDUfUJZ7_nwhVPzQ";
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/light-v8', //stylesheet location
      center: [10.725231170654297, 59.91200869359693], // starting position
      zoom: 12 // starting zoom
    });
    self = this;
    // Add zoom and rotation controls to the map.
    self.map.addControl(new mapboxgl.Navigation({
      position: 'bottom-right'
    }));

    self.map.on('style.load', function() {
      self.map.addSource("markers", {
        "type": "geojson",
        "data": geojson
      });

      self.map.addLayer({
        "id": "markers",
        "type": "circle",
        "source": "markers",
        "interactive": true,
        'paint': {
          'circle-radius': 12,
          'circle-color': 'rgba(55,148,179,1)'
        },
      });
    });

    self.map.on('click', function(e) {
      self.map.featuresAt(e.point, {
        layer: 'markers',
        radius: 10,
        includeGeometry: true
      }, function(err, features) {
        if (err || !features.length) {
          return;
        }
        var feature = features[0];
        self.selectMarketInMap(feature)
      });
    });

    // Use the same approach as above to indicate that the symbols are clickable
    // by changing the cursor style to 'pointer'.
    self.map.on('mousemove', function(e) {
      self.map.featuresAt(e.point, {
        layer: 'markers',
        radius: 10
      }, function(err, features) {
        self.map.getCanvas().style.cursor = (!err && features.length) ? 'pointer' : '';
      });
    });
  }

  componentDidMount() {
    this.marketAction.geojson().then($.proxy(this.createMap, this));
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.selectWithId(nextProps.selectedMarket)
    return false;  
  }

  selectWithId(market_id){
    if(market_id != undefined){
      this.map.featuresIn({layer: 'markers'}, function (err, features) {
        console.log(features);
      })
    }
  }

  selectMarketInMap(feature) {
    new mapboxgl.Popup()
      .setLngLat(feature.geometry.coordinates)
      .setHTML('<h1>' + feature.properties.name + '</h1><img src="' + feature.properties.imageSmall + '"/><p>' + feature.properties.description + '</p>')
      .addTo(self.map);
    this.map.panTo(feature.geometry.coordinates);
    this.props.selectedMarketChanged(feature.properties.id);
  }

  zoomMapToSearchResult(result){
    console.log(result);
    this.map.flyTo({center: [result.aust, result.nord]})
  }

  render() {
    return (
      <div className="fixed" id="mapContainer">
      <Search zoomMapToSearchResult={this.zoomMapToSearchResult}/>
     <div id="map"></div>
     </div>
      );
  }
}

export default Map;

