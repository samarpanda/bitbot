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
const headerObj1 = {
"X-QUIKR-CLIENT-SIGNATURE":"zXcv80386Mdp1hs0q7o0p9uiLZV37TdF",
"X-QUIKR-CLIENT-VERSION":"9.25",
"Content-Type":"application/json",
"X-QUIKR-CLIENT-DEMAIL":"qae6ficmqr26y@quikr.com",
"X-Quikr-Client":"Android.9_25",
"X-Quikr-Token-Id":"798877471",
"X-Quikr-Signature-V2":"601a9ecd7792ff4adaba7ee29c095641439ba821",
"X-Quikr-App-Id":"912"
}
 return new Promise((resolve, reject) => {

   request
     .get(`https://api.quikr.com/mqdp/v1/popularAds`)
     .set(headerObj1)
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

module.exports.getUserAds = function (email, headerObj) {
  const { size } = {
    size: 5
  };

  headerObj = {
      'content-type':'application/json',
      'X-Quikr-App-Id':'912',
      'X-Quikr-Client':'Android.9_25',
      'X-QUIKR-CLIENT-DEMAIL':'qae6ficmqr26y@quikr.com',
      'X-Quikr-Client-Signature':'zXcv80386Mdp1hs0q7o0p9uiLZV37TdF',
      'x-quikr-client-version':'9.25',
      'x-quikr-signature-v2':'0657d0a548d65863d9a4e021ea02e4fd07a9d4b1',
      'x-quikr-token-id':'790798480'
  };
  console.log(headerObj);
  params = {
      "sort" : { "createdTime" : "DESC" },
     "size" : size,
     "from" : 0,
     "userEmail" : email,//"sbhave@quikr.com" ,
     "filters" : { "entityType" : "BasicAd", "NCACreationValidation" : 0, "status" : 0},
     "not_filters" : { "adQuikrSource" : 2 } ,
     "fields" : ["id","title","imageDetails"]
  }
  console.log(params);
  return new Promise((resolve, reject) => {
   request
      .post('http://192.168.124.123:9000/platform/v1/allAds')
      .send(params)
      .set('content-type', 'application/json')
      .set('x-quikr-client', 'msite')
      .end((err, res) => {
        err ? reject(err) : resolve(res);
      })
   })
}