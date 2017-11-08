# Google Map Directions to Geojson

## Install

```
npm install directions-to-geojson --save
```

## Example

### 1. Google Directions
[Google Directions](https://www.google.com/maps/dir/New+Orleans,+LA/Oak+Ridge,+TN/Philadelphia,+PA/Manhattan,+New+York,+NY/@35.0344759,-91.0110439,5z/data=!3m1!4b1!4m26!4m25!1m5!1m1!1s0x8620a454b2118265:0xdb065be85e22d3b4!2m2!1d-90.0715323!2d29.9510658!1m5!1m1!1s0x885c33471cc810df:0x5bca4633ef1072b7!2m2!1d-84.2696449!2d36.0103561!1m5!1m1!1s0x89c6b7d8d4b54beb:0x89f514d88c3e58c1!2m2!1d-75.1652215!2d39.9525839!1m5!1m1!1s0x89c2588f046ee661:0xa0b3281fcecc08c!2m2!1d-73.9712488!2d40.7830603!3e0)

### 2. JS

```js

const directionsToGeoJson = require('directions-to-geojson')

const opts = {
  apiKey: GOOGLE_MAP_API_KEY, // Google Maps API key
  stroke: '#ff1800', // Color of line
  fileName: './test/datafile.geojson', // The output
  origin: 'New Orleans, Louisiana', // Starting location of the directions
  destination: 'Manhattan, New York, NY', // The destination of the directions
  waypoints: [ // The locations between the beginning and destination
    'Oak Ridge, Tennessee',
    'Philadelphia, Pennsylvania'
  ]
}

directionsToGeoJson(opts)
```

### 3. Output

[Geojson output](https://gist.github.com/ianrose/c853130e21e58bbd90ea9f42fd54569b)
