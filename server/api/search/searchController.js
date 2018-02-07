var logger = require('../../util/logger')
var request = require('superagent')
const util = require('util')
const qauth = require('../../q/local.qauth')
//import someObject from ('./somefile.json')

exports.post = function(req, res, next){
  search(req.body.query)
    .then((wres) => {
      res.json(wres)
    })
    .catch((err) => {
      logger.error(err)
    })
}

exports.get = function(req, res){
  return res.json({"me": "sf"})
}

var search = function(query){
  console.log("$$$$ search request " + util.inspect(query, {depth: null}))

  const headerObj = qauth.searchAdsHeaderObj

  return new Promise((resolve, reject) => {
    request
      .post('https://api.quikr.com/mqdp/v1/search')
      .send({
       "lastAdpremiumStatus": true,
       "q": query,
       "adType": "offer",
       "filter": true,
       "fromFlag": "search",
       "srchtype": 0,
       "categoryDetectionEnbaled": true,
       "isExistingUser": 0,
       "per_page_items": 8,
       "from": "search",
       "page": 1,
       "self": false,
       "nextFromVal": 0,
       "olderThan": "1985755294"
      })
      .set(headerObj)
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
  })
}

module.exports.search = search