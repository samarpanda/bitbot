var logger = require('../../util/logger')
var wapi = require('../../wit/wapi')

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