const request = require('superagent');
const config = require('./local.config');
const auth = require('./auth')

const api = require('./qapi')

const cityId = 23;

auth.getAccessToken()
  .then((res) => {
    console.log(res)
    return auth.getHeaders(res.body)
  })
  .then((obj) => {
    console.log(obj)
    api.getPopularAds(obj)
      .then((res) => {
        console.log(JSON.stringify(res))
      })
  })
  // .then((obj) => {
  //   api.getTrendingAdsByCityId(cityId, obj)
  //     .then((res) => {
  //       console.log(JSON.stringify(res.body))
  //     })
  // })
  // .then((obj) => {
  //   api.getAdsByLocation(12, 77, obj)
  //     .then((res) => {
  //       console.log(JSON.stringify(res.body))
  //     })
  // })
  // .then((obj) => {
  //   api.getAdsByCategory(31, obj)
  //     .then((res) => {
  //       console.log(JSON.stringify(res.body, 2))
  //     })
  // })
  // .then((obj) => {
  //   console.log(obj)
  //   api.getLiveOnQuikr(obj)
  //     .then((res) => {
  //       console.log(JSON.stringify(res.body))
  //     })
  // })
  // .then((obj) => {
  //   api.getSharedLeads(obj)
  //     .then((res) => {
  //       console.log(res.body)
  //       console.log(JSON.stringify(res.body))
  //     })
  //     .catch((err) => {
  //       console.error(error)
  //     })
  // })
  .catch((err) => {
    console.error(err)
  })

return true;


auth.getAccessToken(function(err, res){
  console.log(err)
  if(!err){
    console.log('ok', res.body);
  }
})
// return true;

let headerObj = {
  "Content-Type": "application/json",
  "X-Quikr-App-Id": "698",
  "X-Quikr-Token-Id": "337832562",
  "X-QUikr-Signature-v2": "464e3387b0574874ac89471ed5c3bf741be0fb0f"
}

// console.log()

request
  .get(`${config.publicApi}/trending?city=${cityId}`)
  // .set(headerObj)
  .set("Content-Type", "application/json")
  .set("X-Quikr-App-Id", "698")
  .set("X-Quikr-Token-Id", "337832562")
  .set("X-QUikr-Signature-v2", "464e3387b0574874ac89471ed5c3bf741be0fb0f")

  .end(function(err, res){
    if(!err){
      console.log(JSON.stringify(res.body));
    }else{
      console.error(res)
      // console.error(res.body);
    }
});
