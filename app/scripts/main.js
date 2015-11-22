mapboxgl.accessToken = "pk.eyJ1Ijoic3RlZmZlbnAiLCJhIjoiT25HUl9UbyJ9.zzJv3w5uLNwqcuoh6XUxqQ";
var map = new mapboxgl.Map({
	    container: 'map', // container id
	    style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
	    center: [10.725231170654297, 59.91200869359693], // starting position
	    zoom: 12 // starting zoom
	});

var tooltip = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat([10.7273769,59.9170428])
    .setHTML('<h3>Slottsparken loppemarked</h3><p>Om to dager, kl 18:00. Schweigaardsgate 41, 0366 OSLO</p>')
    .addTo(map);

$('.ui.dropdown').dropdown();