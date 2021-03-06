mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hhc2h3YXQxNiIsImEiOiJja3VqZWE1YjYwY2p1MnZtb2xmMTN1OGl1In0.07X8e--ThYM_ZPcHS4deiQ"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}


function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 20
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}



const language = new MapboxLanguage();
map.addControl(language);


