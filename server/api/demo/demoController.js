var logger = require('../../util/logger')
var wapi = require('../../wit/wapi')
var qapi = require('../../q/qapi')
var auth = require('../../q/auth')

exports.post = function(req, res, next){
  logger.log(req.body.query);
  const {query} = req.body;
  wapi.message(query)
    .then((wres) => {
      res.json(wres.text)
    })
    .catch((err) => {
      logger.error(err)
    })
}

exports.get = function(req, res, next){
  res.json({"bit":"bot"})
}

exports.getPopularAds = function(req, res, next){
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
// console.log(headerObj);
qapi.getPopularAds(headerObj)
  .then((ares) => {
    res.json(ares.text)
  })
  .catch((err) => {
    logger.error(JSON.stringify(err))
  })
}

exports.adsbyemail = function(req, res, next){
  logger.log(req.body.email);
  const {email} = req.body;

   auth.getAccessToken()
     .then((authRes) => {
       return auth.getHeaders(authRes.body)
     })
     .then((obj) => {
       qapi.getUserAds(req.body.email, obj)
         .then((ares) => {
           // console.log(JSON.stringify(ares.text))
           res.json(ares.text)
         })
         .catch((err) => {
           logger.error(JSON.stringify(err))
         })
     })
}