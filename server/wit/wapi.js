var request = require('superagent')
const WIT_URL = 'https://api.wit.ai'

module.exports.message = function(query){
  return new Promise((resolve, reject) => {
    request
      .get(`${WIT_URL}/message?v=020218&q=${query}`)
      .set('authorization', 'Bearer CNC7HJIQUY25CX6ZOF4LLLN6JVL5OSNR')
      .end((err, res) => {
        err ? reject(err) : resolve(res)
      })
  })
}


