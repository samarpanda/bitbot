var logger = require('../../util/logger')
var request = require('superagent')
var wapi = require('../../wit/wapi')
var search = require('../search/searchController')
const util = require('util')
var qapi = require('../../q/qapi')
var auth = require('../../q/auth')

const token = "EAAH8lee0ZBnMBACe8ry6inf009p99ZADepqO6kLqZC6NAxBKk7NhM9B52r9i2CISqwF4L8CSqASolK86AePF8aMJgKPIslt1fR9M1DSHydH2hcUAHLJ5SlqRBzrRt49rscStk9D0e8JUYK8imzVwW2fkjJuFtKde6bHHGiLiAZDZD"

// const constantPayload = {
//   "attachment":{
//     "type":"template",
//     "payload":{
//       "template_type":"generic",
//       "elements":[]
//     }
//   }
// }

function getConstantPayload(){
  return {
  "attachment":{
    "type":"template",
    "payload":{
      "template_type":"generic",
      "elements":[]
      }
    }
  }
}


exports.get = function(req, res){
  if (req.query['hub.verify_token'] === "ujjwal") {
    res.status(200).send(req.query['hub.challenge'])
  }
  res.status(403).end()
}

exports.post = function(req, res, next){
  let messaging_events = req.body.entry[0].messaging
  console.log("$$$$ messaging_events " + messaging_events.length)
  for (let i = 0; i < messaging_events.length; i++) {
    let event = messaging_events[i]
    let sender = event.sender.id
    console.log("$$$$ sender id before nlp " + event.sender.id)
    if (event.message && event.message.text) {
      let text = event.message.text
      console.log("$$$$ request from messenger " + text)
      wapiCall(text, sender)
    }
  }
  res.status(200).end()
}

function wapiCall(text, sender){
  wapi.message(text)
      .then((wres) => {
        wres = JSON.parse(wres.text)
        console.log("$$$$ sender id after nlp call " + util.inspect(sender, {depth: null}))
        let entities = wres.entities
        // console.log("$$$$ entities form wapi " + util.inspect(entities, {depth: null}))
        let location;
        if(entities.hasOwnProperty('location')){
          location = entities.location[0].value
          console.log("$$$$ location from nlp " + util.inspect(location, {depth: null}))
        }

        let user_action;
        if(entities.hasOwnProperty('user_action')){
          user_action = entities.user_action[0].value
          console.log("$$$$$$ user_action from nlp" + util.inspect(user_action, {depth: null}))
        }

        switch(user_action){
            case "search_intent":
            console.log(" $$$$ search_intent")
              search.search(wres._text)
                  .then((dres) => {
                    let rest = JSON.parse(dres.text)
                    let respo = rest.SearchApplicationResponse.SearchApplication.ads || [];
                    console.log("$$$$ response form search " + util.inspect(wres, {depth: null}))
                    if(respo.length)
                      sendText(respo, sender)
                    else
                      logger.debug("No ads found")
                  })
                  .catch((err) => {
                    logger.error(err)
                  })
              break
            case "trending_ads_intent":
              console.log(" $$$$ trending_ads_intent")
              auth.getAccessToken()
                .then((authRes) => {
                  return auth.getHeaders(authRes.body)
                })
                .then((obj) => {
                  qapi.getPopularAds(obj)
                    .then((ares) => {
                      // console.log(JSON.stringify(ares.text))
                      sendPopularAds(ares, sender)
                      //res.json(ares.text)
                    })
                    .catch((err) => {
                      logger.error(JSON.stringify(err))
                    })
                })
              break
            case "messages_intent":
              break
            case "my_ads_intent":
              break
            default:

        }
      })
      .catch((err) => {
        logger.error(err)
      })
}

function sendPopularAds(ares, sender){
  let ads = JSON.parse(ares.text).PopularAdsApplicationResponse.PopularAdsApplication.ad["0"]
  let responsePayload = getConstantPayload()
  console.log("$$$$ constantPayload " + util.inspect(responsePayload, {depth: null}))
  let image_url, title, adId
  ads.forEach((item, index) => {
    adId = item.id
    title = item.title
    if(item.hasOwnProperty('images') && Array.isArray(item.images) && item.images[0]){
      image_url = item.images[0].replace("http://teja1.kuikr.com","https://teja8.kuikr.com");
      image_url = item.images[0].replace("http://teja2.kuikr.com","https://teja8.kuikr.com");
      image_url = item.images[0].replace("http://teja3.kuikr.com","https://teja8.kuikr.com");
    }else{
      image_url = `https://teja8.kuikr.com/restatic/image/tile-no-photo.jpg`;
    }
    responsePayload.attachment.payload.elements.push(addValues(title, image_url, adId))
  })
  console.log("$$$$ response at end " + util.inspect(responsePayload, {depth: null}))
  sendResponse(sender, responsePayload)
}

function sendResponse(sender, messagePayload){
  request
    .post('https://graph.facebook.com/v2.6/me/messages')
    .set('content-type', 'application/json')
    .query({access_token: token})
    .send({
      recipient: {id: sender},
      message: messagePayload
    })
    .then(function(res){
      console.log("$$$$ final response " + util.inspect(res, {depth: null}))
    })
    .catch((err) => {
      console.log(err.text)
    })
}

function sendText(ads, sender){
  let responsePayload = getConstantPayload()
  console.log("$$$$ final sender id before sending response to messenger " + sender)
  let image_url, title, adId;
  ads.forEach((item, index) => {
    title = item.title;
    adId = item.id;
    if(item.hasOwnProperty('imgCount') && item.imgCount > 0 && item.hasOwnProperty('images') && Array.isArray(item.images) && item.images[0]){
      image_url = item.images[0].replace("http://teja1.kuikr.com","https://teja8.kuikr.com")
      console.log("Image_URL: ", image_url);
    }else{
      image_url = `https://teja8.kuikr.com/restatic/image/tile-no-photo.jpg`;
    }
    responsePayload.attachment.payload.elements.push(addValues(title, image_url, adId))
  })
  //console.log("$$$$ response at end " + util.inspect(responsePayload, {depth: null}))
  if(responsePayload.attachment.payload.elements.length)
    sendResponse(sender, responsePayload)
  else
    logger.debug("No respond to be sent")
}


function addValues(title, image_url, id){
  var str = {
  "title":title,
  "image_url":image_url,
  "subtitle":"",
  "default_action": {
    "type": "web_url",
    "url": image_url,
    "messenger_extensions": true,
    "webview_height_ratio": "tall",
    "fallback_url": "https://www.quikr.com"
  },
  "buttons":[
    {
      "type":"web_url",
      "url":`https://www.quikr.com/SH0QQAdIdZ${id}`,
      "title":"View this"
    },
    {
      "type":"postback",
      "title":"Start Chatting",
      "payload":"DEVELOPER_DEFINED_PAYLOAD"
    }
  ]
}

  return str;
}