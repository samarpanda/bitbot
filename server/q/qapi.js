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

module.exports.getSharedLeads = function(headerObj){
  return new Promise((resolve, reject) => {
    // console.log(headerObj);
    // console.log(`${config.publicApi()}/realestate/v1/getLeadSharedDetails?key=5C52937c60267G421473&companyId=21473&startDate=2016-12-27&endDate=2017-02-06`);
    request
    .get(`https://api.quikr.com/realestate/v1/getLeadSharedDetails?key=k0l42tqpucuxcdt50hyj7bdairjup36o&startDate=2016-12-27&endDate=2018-02-22`)
    .set(headerObj)
    .end((err, res) => {
      // console.log(err)
      err ? reject(err) : resolve(res)
    })
  })

}