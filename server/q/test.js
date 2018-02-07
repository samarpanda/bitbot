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