mapboxgl.accessToken = mapBoxToken || process.env.mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
    center: [10.725231170654297, 59.91200869359693], // starting position
    zoom: 12 // starting zoom
});

$('.ui.dropdown')
  .dropdown()
;