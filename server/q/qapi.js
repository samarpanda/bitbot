var request = require('superagent');
var auth = require('./auth');
var config = require('./local.config');

module.exports.getTrendingAdsByCityId = function(cityId, headerObj){
  return new Promise((resolve, reject) => {
    request
      .get(`${config.publicApi()}/trending?city=${cityId}`)
      .set(headerObj)
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
  })
}
module.exports.getAdsByLocation = function(lat, lon, headerObj){
  return new Promise((resolve, reject) => {
    request
      .get(`${config.publicApi()}/adsByLocation?lat=${lat}&lon=${lon}&from1&size=5`)
      .set(headerObj)
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
  })
}
module.exports.getAdsByCategoryAndCity = function(categoryId, cityName, headerObj){
  const {startFrom, pageSize} = {
    startFrom: 0,
    pageSize: 2
  };
  return new Promise((resolve, reject) => {
    request
      .get(`${config.publicApi()}/adsByCategory?categoryId=${categoryId}&city=${cityName}&from=${startFrom}&size=${pageSize}`)
      .set(headerObj)
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
  })
}
module.exports.getAdsByCategory = function(categoryId, headerObj){
  const {startFrom, pageSize} = {
    startFrom: 0,
    pageSize: 2
  };
  return new Promise((resolve, reject) => {
    request
      .get(`${config.publicApi()}/adsByCategory?categoryId=${categoryId}&from=${startFrom}&size=${pageSize}`)
      .set(headerObj)
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
  })
}
module.exports.getAdsByCity = function(cityName, headerObj){
  const {startFrom, pageSize} = {
    startFrom: 0,
    pageSize: 2
  };
  return new Promise((resolve, reject) => {
    request
      .get(`${config.publicApi()}/adsByCategory?city=${cityName}&from=${startFrom}&size=${pageSize}`)
      .set(headerObj)
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
  })
}
module.exports.getLiveOnQuikr = function(headerObj){
  return new Promise((resolve, reject) => {
    request
    .get(`${config.publicApi()}/liveOnQuikr`)
    .set(headerObj)
    .end((err, res) => {
      err ? reject(err) : resolve(res);
    })
  })
}

module.exports.getPopularAds = function (headerObj) {
 return new Promise((resolve, reject) => {

   request
     .get(`https://api.quikr.com/mqdp/v1/popularAds`)
     .set(headerObj)
     .end((err, res) => {
       err ? reject(err) : resolve(res);
     })
   })
}

module.exports.getCityId = function(cityName, headerObj){
  return new Promise((resolve, reject) => {
    request
    .get(`${config.qApi}/realestate/v1/citiesFull?name=${cityName}`)
    .set(headerObj)
    .end((err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
}