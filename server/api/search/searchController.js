var logger = require('../../util/logger')
var request = require('superagent');
//import someObject from ('./somefile.json')

exports.post = function(req, res, next){
  search(req)
    .then((wres) => {
      res.json(wres.text)
    })
    .catch((err) => {
      logger.error(err)
    })
}

exports.get = function(req, res){
  return res.json({"me": "sf"})
}

var search = function(query){
  return new Promise((resolve, reject) => {
    request
      .post('http://192.168.124.124:8999/search-ads')
      .send({
       "keywords": "cars in bangalore",
       "filters": {
         "city_id": 23,
         "status": 0,
         "category_pgid": 269
       },
       "not_filters": {
         "NCACreationValidation": 1
       },
       "normalized": true,
       "source": "Desktop",
       "caller": "browse",
       "city": "Bangalore",
       "from": 0,
       "size": 10,
       "userSearch": false,
       "facets":["status","category_gid","attribute_Ad_Type","attribute_Style"],
       "abTestEnable":["nationwide-city"],
       "aggs": [
        {
        "type": "geohash_grid",
        "field":     "geo_pin",
       "precision": 6,
       "size": 32,
       "aggs": {
        "type": "geo_bounds",
        "field":     "geo_pin"
       }
        },
        {
        "type": "term",
        "field":  "category_pid",
        "aggs": {
        "type": "term",
        "field":  "attribute_You_are"
        }
        }
       ]
     })
      .set('content-type', 'application/json')
      .set('x-quikr-client', 'msite')
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
  })

module.exports.search = search

}