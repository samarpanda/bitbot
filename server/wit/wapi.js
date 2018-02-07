var request = require('superagent')
const WIT_URL = 'https://api.wit.ai'
const config = require('../q/local.config')

module.exports.message = function(query){
  return new Promise((resolve, reject) => {
    request
      .get(`${WIT_URL}/message?v=020218&q=${query}`)
      .set('authorization', config.witkey)
      .end((err, res) => {
        err ? reject(err) : resolve(res)
      })
  })
}


