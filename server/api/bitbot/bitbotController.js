var logger = require('../../util/logger')
var request = require('superagent')
var wapi = require('../../wit/wapi')
var search = require('../search/searchController')
const util = require('util')
var qapi = require('../../q/qapi')
var auth = require('../../q/auth')

const token = "EAAH8lee0ZBnMBACe8ry6inf009p99ZADepqO6kLqZC6NAxBKk7NhM9B52r9i2CISqwF4L8CSqASolK86AePF8aMJgKPIslt1fR9M1DSHydH2hcUAHLJ5SlqRBzrRt49rscStk9D0e8JUYK8imzVwW2fkjJuFtKde6bHHGiLiAZDZD"

exports.get = function(req, res){
  if (req.query['hub.verify_token'] === "ujjwal") {
    res.send(req.query['hub.challenge'])
  }
  res.send("Wrong token")
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
}

function wapiCall(text, sender){
  wapi.message(text)
      .then((wres) => {
        wres = JSON.parse(wres.text)
        console.log("$$$$ sender id after nlp call " + util.inspect(sender, {depth: null}))
        let entities = wres.entities
        // console.log("$$$$ entities form wapi " + util.inspect(entities, {depth: null}))
        let location = entities.location[0].value
        console.log("$$$$ location from nlp " + util.inspect(location, {depth: null}))
        let user_action = entities.user_action[0].value
        console.log("$$$$$$ user_action from nlp" + util.inspect(user_action, {depth: null}))
        switch(user_action){      
            case "search_intent":
            console.log(" $$$$ search_intent")
              search.search(wres._text)
                  .then((dres) => {
                    //let respo = JSON.parse(dres).docs
                    let respo = dres.docs
                    console.log("$$$$ response form search " + util.inspect(wres, {depth: null}))
                    sendText(respo, sender)
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
  let ads = ares.PopularAdsApplicationResponse.PopularAdsApplication.ad["0"]
  let responsePayload = constantPayload
  console.log("$$$$ constantPayload " + util.inspect(responsePayload, {depth: null}))
  let image_url, title
  ads.forEach((item, index) => {
    title = item.title
    if(item.images[0]){
      image_url = item.images[0]
    }else{
      image_url = `https://teja8.kuikr.com/restatic/image/tile-no-photo.jpg`;
    }
    responsePayload.attachment.payload.elements.push(addValues(title, image_url))
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
}

function sendText(ads, sender){
  let responsePayload = constantPayload
  console.log("$$$$ final sender id before sending response to messenger " + sender)
  let image_url, title
  ads.forEach((item, index) => {
    title = item.title
    if(item.image_count){
      image_url = `https://teja8.kuikr.com/${item.images}`
    }else{
      image_url = `https://teja8.kuikr.com/restatic/image/tile-no-photo.jpg`;
    }
    responsePayload.attachment.payload.elements.push(addValues(title, image_url))
  })
  console.log("$$$$ response at end " + util.inspect(responsePayload, {depth: null}))
  sendResponse(sender, responsePayload)
  // request
  //   .post('https://graph.facebook.com/v2.6/me/messages')
  //   .set('content-type', 'application/json')
  //   .query({access_token: token})
  //   .send({
  //     recipient: {id: sender},
  //     message: responsePayload
  //   })
  //   .then(function(res){
  //     console.log("$$$$ final response " + util.inspect(res, {depth: null}))
  //   })
}

const constantPayload = {
  "attachment":{
    "type":"template",
    "payload":{
      "template_type":"generic",
      "elements":[]
    }
  }
}

function addValues(title, image_url){
  var str = {
  "title":title,
  "image_url":image_url,
  "subtitle":"We've got the right hat for everyone.",
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
      "url":"https://www.quikr.com",
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

              
            
        

