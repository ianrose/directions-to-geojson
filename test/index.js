
require('dotenv').config({silent: true})

const directionsToGeoJson = require('./../index')

const opts = {
  apiKey: process.env.GOOGLE_MAP_API_KEY,
  stroke: '#ff1800',
  fileName: './test/datafile.geojson',
  origin: 'New Orleans, Louisiana',
  destination: 'Manhattan, New York, NY',
  waypoints: [
    'Oak Ridge, Tennessee',
    'Philadelphia, Pennsylvania'
  ]
}

directionsToGeoJson(opts)
