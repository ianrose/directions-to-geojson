const fs = require('fs')
const polyline = require('@mapbox/polyline')
const request = require('request')

const config = {
  apiKey: '##############',
  stroke: '#ff1800',
  fileName: 'datafile.geojson',
  origin: 'New Orleans, Louisiana',
  destination: 'Manhattan, New York, NY',
  waypoints: [
    'Oak Ridge, Tennessee',
    'Philadelphia, Pennsylvania'
  ]
}

const waypoints = config.waypoints.join('|')

const url = `https://maps.googleapis.com/maps/api/directions/json?key=${config.apiKey}&origin=%22${config.origin}%22&destination=%22${config.destination}%22&waypoints=${waypoints}`

let obj = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'properties': {
        'stroke': config.stroke
      }
    }
  ]
}

request({
  url: url,
  json: true
}, function (error, response, body) {
  console.log(`Response: ${response.statusCode}`)
  if (!error && response.statusCode === 200) {
    const poly = body.routes[0].overview_polyline.points
    const data = polyline.toGeoJSON(poly)
    obj.features[0].geometry = data

    fs.writeFile(config.fileName, JSON.stringify(obj), function () {
      console.log(`Written ${config.fileName}`)
    })
  }
})
