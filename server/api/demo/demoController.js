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

  auth.getAccessToken()
  .then((authRes) => {
    return auth.getHeaders(authRes.body)
  })
  .then((obj) => {
    qapi.getPopularAds(obj)
      .then((ares) => {
        // console.log(JSON.stringify(ares.text))
        res.json(ares.text)
      })
      .catch((err) => {
        logger.error(JSON.stringify(err))
      })
  })
}