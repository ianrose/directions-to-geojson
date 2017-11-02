const fs = require('fs')
const polyline = require('@mapbox/polyline')
const request = require('request')

function directionsToGeoJson (opts) {
  opts.apiKey = opts.apiKey || null
  opts.stroke = opts.stroke || null
  opts.fileName = opts.fileName || null
  opts.origin = opts.origin || null
  opts.destination = opts.destination || null
  opts.waypoints = opts.waypoints || []

  const waypoints = opts.waypoints.join('|')

  const url = `https://maps.googleapis.com/maps/api/directions/json?key=${opts.apiKey}&origin=%22${opts.origin}%22&destination=%22${opts.destination}%22&waypoints=${waypoints}`

  let obj = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'properties': {
          'stroke': opts.stroke
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

      fs.writeFile(opts.fileName, JSON.stringify(obj), function () {
        console.log(`Written ${opts.fileName}`)
      })
    }
  })
}

module.exports = directionsToGeoJson
