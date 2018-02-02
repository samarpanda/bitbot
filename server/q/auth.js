var crypto = require('crypto');
var moment = require('moment')();
var config = require('./local.config');
var d = moment.format("YYYY-MM-DD");
// var d = moment.subtract(1, 'days').format("YYYY-MM-DD");

var request = require('superagent');

var signature = function(){
  var text = config.email + config.appid + d;
  // console.log(text)
  let sig = crypto.createHmac('sha1', config.key).update(text).digest('hex');
  // signature
  // console.log(sig)
  return sig;
}

module.exports.getAccessToken = function(callback){
  // let obj = {};
  // obj.body = {
  //   error: 'false',
  //   message: 'Success',
  //   token: '6b3d1e9a8cf21a4518d9f52b29c1ec1b',
  //   tokenId: 377082571
  // };
  // return new Promise((resolve, reject) => {
  //   resolve(obj);
  // });
  return new Promise((resolve, reject) => {
    request
      .post(config.accessTokenUrl())
      .send({
        'appId': config.appid,
        'signature': signature()
      })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
  })
};

module.exports.getHeaders = function(obj){
  const text = config.appid + config.email + d;
  const sig = crypto.createHmac('sha1', obj.token).update(text).digest('hex')
  return{
    'X-Quikr-App-Id': config.appid,
    'X-Quikr-Token-Id': obj.tokenId,
    'X-Quikr-Signature-v2': sig
  }
}

