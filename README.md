# `@cypherlab/geocode`


🌎 Geocoding utilities  

<a href="https://www.npmjs.com/package/@cypherlab/geocode">
  <img alt="npm" src="https://img.shields.io/npm/v/@cypherlab/geocode">
</a>

## Install
```
npm i @cypherlab/geocode --save
```


## Usage

### geocode(input, apikey)

```js
import { geocode } from '@cypherlab/geocode'

const apikey = 'xxx' // google maps apikey
const place1 = await geocode('1060 West Addison Street', apikey)
const place2 = await geocode('43.5262719, 5.4484675', apikey)
```
=> The number of returned attributes can vary depending on google api results. It can contains at most 11 keys.

```json
{
  "address": "20 Cours Mirabeau, 13100 Aix-en-Provence, France",
  "place_id": "ChIJZdvVzpeNyRIR7TBCZQeHwUY",
  "latlng": "43.5262719,5.4484675",
  "street_number": "20",
  "street": "Cours Mirabeau",
  "city": "Aix-en-Provence",
  "state": "Bouches-du-Rhône",
  "region": "Provence-Alpes-Côte d\'Azur",
  "country": "France",
  "country_code": "FR",
  "zipcode": "13100"
}
```

### inRadius(center, marker, radius)

Check if a marker is within radius of a center point.


```js
import { inRadius } from '@cypherlab/geocode'

const center = '43.5262719, 5.4484675'
const marker = '42.876519, 5.2531983'
const radius = '10' // kilometers

inRadius(center, marker, radius) // true or false
```


## Test

Include a `.env` file at the root of the package folder containing :
```
APIKEY=YourGoogleMapKey
```

run test at the root of the lerna repo with
```
npm run test
```

