// Create map
var map = L.map('map').setView([0, 0], 2);

// Basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// Example marker
L.marker([0, 0]).addTo(map)
    .bindPopup("Center of the world!")
    .openPopup();
