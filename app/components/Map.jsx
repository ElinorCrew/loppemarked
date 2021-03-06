import React from 'react';
import GeoJSON from 'geojson';
import MarketCard from 'components/MarketCard';
import Search from 'components/Search';
import MarketsAction from '../actions/marketActions';
import MarketStore from 'stores/marketStore';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.map = {};
    this.popup = null;
  }

  componentDidMount() {
    MarketStore.getAllAsPromise().then(function(markets) {
      var featureCollection = GeoJSON.parse(markets, {
        Point: ['lat', 'lng']
      });

      this.map = this.createMap(featureCollection);

      // Map is ready for changes;
      MarketStore.addChangeListener(this.onChange.bind(this));
    }.bind(this));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentWillUnmount() {
    MarketStore.removeChangeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setSelectMarket(MarketStore.getSelected())
    this.setHoveredMarket(MarketStore.getHoveredId());
  }

  createMap(geojson) {
    mapboxgl.accessToken = "pk.eyJ1Ijoic3RlZmZlbnAiLCJhIjoiY2loYnBxMmtpMHd6M3Vra3RybXZxbjZ2byJ9.NXvjP_UDUfUJZ7_nwhVPzQ";
    let map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/light-v8', //stylesheet location
      center: [10.725231170654297, 59.91200869359693], // starting position
      zoom: 12 // starting zoom
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.Navigation({
      position: 'bottom-right'
    }));

    map.on('style.load', function() {
      map.addSource("markets", {
        "type": "geojson",
        "data": geojson
      });

      map.addLayer({
        "id": "markets",
        "type": "circle",
        "source": "markets",
        "interactive": true,
        'paint': {
          'circle-radius': 12,
          'circle-color': 'rgba(55,148,179,1)'
        },
      });

      map.addLayer({
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

      map.addLayer({
        "id": "market-select",
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

    map.on('click', function(e) {
      map.featuresAt(e.point, {
        layer: 'markets',
        radius: 10,
        includeGeometry: true
      }, function(err, features) {
        if (err || !features.length) {
          MarketsAction.select(null);
        }else {
          MarketsAction.select(features[0].properties.id);
        }
      });
    });

    map.on('mousemove', function(e) {
      map.featuresAt(e.point, {
        layer: 'markets',
        radius: 10,
        includeGeometry: false
      }, function(err, features) {
        if (!err && features.length) {
          MarketsAction.hover(features[0].properties.id);
          map.getCanvas().style.cursor = "pointer";
        } else {
          map.getCanvas().style.cursor = "";
          MarketsAction.hover(null);
        }
      });
    });

    return map;
  }

  setHoveredMarket(marketId) {
    if (!this.map.setFilter) {
      return;
    }
    marketId = marketId || "";
    this.map.setFilter("market-hover", ["==", "id", marketId]);
  }

  setSelectMarket(market) {
    if (this.popup && this.popup._container.parentNode) {
      this.popup.remove();
    }

    market = market || {};
    this.map.setFilter("market-select", ["==", "id", market.id]);

    if (market != {} && market.id) {
      this.map.flyTo({
        center: [market.lng, market.lat]
      });
      this.popup = new mapboxgl.Popup()
        .setLngLat([market.lng, market.lat])
        .setHTML('<h5>' + market.name + '</h5>')
        .addTo(this.map);
    }
  }

  zoomMapToSearchResult(result) {
    this.map.flyTo({
      center: [result.aust, result.nord]
    });
  }

  render() {
    return ( < div className = "fixed"
      id = "mapContainer" >
      < Search zoomMapToSearchResult = {
        this.zoomMapToSearchResult.bind(this)
      }
      />
            <div id="links"><a href="https:/ / www.facebook.com / Skattekartet - 1142926499052047 / "><i className="
      icon facebook "/></a><a href="
      https: //www.instagram.com/skattekartet/"><i className="icon instagram"/></a><a href="https://twitter.com/skattekartet"><i className="icon twitter"/></a></div>
      < div id = "map" > < /div>
      </div >
    );
  }
}

export
default Map;
