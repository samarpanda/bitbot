var logger = require('../../util/logger')
var request = require('superagent')
const util = require('util')
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

const headerObj = {
"X-QUIKR-CLIENT-SIGNATURE":"zXcv80386Mdp1hs0q7o0p9uiLZV37TdF",
"X-QUIKR-CLIENT-VERSION":"9.25",
"Content-Type":"application/json",
"X-QUIKR-CLIENT-DEMAIL":"qae6ficmqr26y@quikr.com",
"X-Quikr-Client":"Android.9_25",
"X-Quikr-Token-Id":"790798480",
"X-Quikr-Signature-V2":"0657d0a548d65863d9a4e021ea02e4fd07a9d4b1",
"X-Quikr-App-Id":"912"
}

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