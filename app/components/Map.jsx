import React from 'react';
import MarketCard from 'components/MarketCard';
import Markets from 'actions/markets';
import Search from 'components/Search';
import MarketsDispatcher from 'dispatchers/marketDispatcher';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.marketAction = new Markets();
    this.map = {};
    this.popup = null;
    // MarketsDispatcher.registrerOnSelected.push(this);
    // MarketsDispatcher.registrerOnHover.push(this);
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
     self.map.addSource("markets", {
      "type": "geojson",
      "data": geojson
    });

     self.map.addLayer({
      "id": "markets",
      "type": "circle",
      "source": "markets",
      "interactive": true,
      'paint': {
        'circle-radius': 12,
        'circle-color': 'rgba(55,148,179,1)'
      },
    });

     self.map.addLayer({
      "id": "market-hover",
      "type": "circle",
      "source": "markets",
      "interactive": true,
      'paint': {
        'circle-radius': 15,
        'circle-color': 'rgba(55,148,179,1)'
      },
      "filter": ["==", "id", ""]
    });
   });

    self.map.on('click', function(e) {
      self.map.featuresAt(e.point, {
        layer: 'markets',
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
    
    self.setHoveredMarket.bind(this);
    self.map.on('mousemove', function(e) {
      self.map.featuresAt(e.point, {
        layer: 'markets',
        radius: 10,
        includeGeometry: false
      }, function(err, features) {
        if (!err && features.length) {
          self.setHoveredMarket(features[0].properties.id);
          self.map.getCanvas().style.cursor = "pointer";
        } else {
          self.map.getCanvas().style.cursor = "";
          self.setHoveredMarket("");
        }
      });
    });
  }

  setHoveredMarket(marketId) {
    if (!this.map.setFilter) {return;}
    marketId = marketId || ""; 
    
    this.map.setFilter("market-hover", ["==", "id", marketId]);
  }

  onMarketHover (market) {
    if (market && market.id) {
      this.setHoveredMarket(market.id);
    }else{
      this.setHoveredMarket(market);
    }
  }

  componentDidMount() {
    this.marketAction.geojson().then($.proxy(this.createMap, this));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  onMarketSelected(market) {
    if (market !== undefined && market.id) {
      this.centerOnMarket(market)
    }
  }

  centerOnMarket(market) {
    if (this.popup && this.popup._container.parentNode) {
      this.popup.remove();
    }
    self = this;
    self.map.flyTo({
      center: [market.lng, market.lat]
    });
    this.popup = new mapboxgl.Popup()
    .setLngLat([market.lng, market.lat])
    .setHTML('<h1>' + market.name + '</h1><img src="' + market.imageSmall + '"/><p>' + market.description + '</p>')
    .addTo(self.map);
  }

  selectMarketInMap(feature) {
    this.popup = new mapboxgl.Popup()
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h1>' + feature.properties.name + '</h1><img src="' + feature.properties.imageSmall + '"/><p>' + feature.properties.description + '</p>')
    .addTo(self.map);
    this.map.panTo(feature.geometry.coordinates);
    MarketsDispatcher.select(feature.properties.id);
  }

  zoomMapToSearchResult(result) {
    this.map.flyTo({
      center: [result.aust, result.nord]
    });
  }

  render() {
    return (
            <div className="fixed" id="mapContainer">
            <Search zoomMapToSearchResult={this.zoomMapToSearchResult}/>
            <div id="links"><a href="https://www.facebook.com/Skattekartet-1142926499052047/"><i className="icon facebook"/></a><a href="https://www.instagram.com/skattekartet/"><i className="icon instagram"/></a><a href="https://twitter.com/skattekartet"><i className="icon twitter"/></a></div>
            <div id="map"></div>
            </div>
            );
  }
}

export default Map;

